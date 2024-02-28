import React, { useState } from "react";
import SecondaEstrazione from "../Components/SecondaEstrazione";
import SecondaEstrazioneDiretta from "../Components/SecondaEstrazioneDiretta";
import FetchImprevisto from "../Funzioni/FetchImprevisto";
import LayoutBase from "../Components/LayoutBase";
import Dado from "../Components/Dado";
import random from "random";
import { supabase } from "../supabaseClient";

const Prepartita = () => {
  const [casuale, setCasuale] = useState(null);

  // Prima Estrazione

  const fetchList = async () => {
    let { data: prepartita, error } = await supabase
      .from("prepartita")
      .select("*");
    setCasuale(prepartita ? random.choice(prepartita) : console.log(error));
  };

  const {
    id,
    title,
    description,
    isImprev,
    ultEstrazione,
    multi,
    extractedPl,
  } = casuale ? casuale : {};

  const titoloH1 = "Imprevisto Prepartita";
  const isImpCommunity = title === "IMPREVISTO SPECIALE";

  return (
    <>
      <LayoutBase
        titoloH1={titoloH1}
        id={id}
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
                  ? "text-5xl font-extrabold uppercase md:relative md:top-2 md:flex-1 md:text-6xl"
                  : "hidden"
              }
            >
              {isImpCommunity ? "Imprevisto SPECIALE" : "IMPREVISTO!"}
            </h2>
            {!isImpCommunity ? (
              <>
                <h3
                  style={{ filter: "drop-shadow(.05rem .05rem 0.1rem #000)" }}
                  className={`text-4xl font-extrabold uppercase md:flex-1 md:text-5xl ${
                    title === "IMPREVISTO SPECIALE" && "hidden"
                  }`}
                >
                  {title}
                </h3>
                <p
                  style={{ fontFamily: "'Handlee', cursive" }}
                  className="mt-4 px-4 text-xl md:flex-1 md:text-3xl"
                >
                  {description}
                </p>
                {/* Eccezione imprevisto n. 28 */}
                <p className="text-sm italic md:text-lg">
                  {id === 26 &&
                    "Attenzione! Imprevisto applicabile una sola volta per stagione"}
                  {id === 28 &&
                    "Attenzione! Non si applica alle partite determinanti (es. turni di ritorno, partite secche, scontri diretti)"}
                </p>
              </>
            ) : (
              <>
                <FetchImprevisto />
              </>
            )}
            {ultEstrazione && extractedPl === 1 && <SecondaEstrazione />}
            {extractedPl > 1 && (
              <SecondaEstrazioneDiretta extractedPl={extractedPl} />
            )}
          </section>
        )}
      </LayoutBase>
      {Dado(fetchList)}
    </>
  );
};

export default Prepartita;
