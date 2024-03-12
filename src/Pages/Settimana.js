import React, { useState } from "react";
import Dado from "../Components/Dado";
import random from "random";
import FetchImprevisto from "../Funzioni/FetchImprevisto";
//import { motion } from "framer-motion";
import LayoutBase from "../Components/LayoutBase";
import { supabase } from "../supabaseClient";

const Settimana = () => {
  const [casuale, setCasuale] = useState(null);

  // Prima Estrazione

  const fetchList = async () => {
    let { data: settimana, error } = await supabase
      .from("settimana")
      .select("*");
    setCasuale(settimana ? random.choice(settimana) : console.log(error));
  };

  const { titolo, descrizione, isImprev } = casuale
    ? casuale
    : {};

  const titoloH1 = "Imprevisto Settimanale";
  const isImpSpeciale = titolo === "IMPREVISTO SPECIALE";

  return (
    <>
      <LayoutBase
        titoloH1={titoloH1}
        isImprev={isImprev}
        casuale={casuale}
      >
        {casuale && (
          <section className="flex h-full w-full flex-col items-center justify-around">
            <h2
              style={{
                fontFamily: "'Boogaloo', sans-serif",
                filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
              }}
              className={
                isImprev
                  ? "text-5xl h-full md:pt-6 font-extrabold uppercase md:relative md:top-2 md:text-6xl flex items-center"
                  : "invisible md:h-full"
              }
            >
              {isImpSpeciale ? "Imprevisto SPECIALE" : "IMPREVISTO!"}
            </h2>
            {!isImpSpeciale ? (
              <>
                <h3
                  style={{ filter: "drop-shadow(.05rem .05rem 0.1rem #000)" }}
                  className={`text-4xl md:h-full font-extrabold uppercase md:text-5xl flex items-center ${
                    titolo === "IMPREVISTO SPECIALE" && "hidden"
                  }`}
                >
                  {titolo}
                </h3>
                <p
                  style={{ fontFamily: "'Handlee', cursive" }}
                  className="mt-4 px-4 text-xl md:h-full md:text-3xl"
                >
                  {isImprev && descrizione}
                </p>
                
              </>
            ) : (
              <>
                <FetchImprevisto />
              </>
            )}
          </section>
        )}
      </LayoutBase>
      {Dado(fetchList)}
    </>
  );
};

export default Settimana;
