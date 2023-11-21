import React, { useState } from "react";
import Dado from "../Components/Dado";
import { randomNumber } from "../Funzioni/RandomNumber";
import datiSettimana from "../Data/datiSettimana";
import SecondaEstrazione from "../Components/SecondaEstrazione";
import FetchImprevisto from "../Funzioni/FetchImprevisto";
import { motion } from "framer-motion";
import LayoutBase from "../Components/LayoutBase";

const Settimana = () => {
  const [casuale, setCasuale] = useState(null);

  // Prima Estrazione

  const estraiNumeroCasuale = () => {
    setCasuale(randomNumber(datiSettimana));
  };

  const { id, title, description, isImprev } = casuale
    ? datiSettimana[casuale - 1]
    : {};

  const titoloH1 = "Imprevisto Settimanale";
  const isImpCommunity = title === "PAROLA ALLA COMMUNITY!";

  return (
    <>
      <LayoutBase
        titoloH1={titoloH1}
        id={id}
        isImprev={isImprev}
        casuale={casuale}
      >
        {casuale && (
          <>
            <motion.p
              initial={{ opacity: 0, x: "50vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring" }}
              style={{
                filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300/20 p-8 text-4xl md:self-start md:p-12 md:text-6xl"
            >
              {id}
            </motion.p>

            <h2
              style={{
                fontFamily: "'Boogaloo', sans-serif",
                filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
              }}
              className={
                isImprev
                  ? "flex-1 text-5xl font-extrabold uppercase md:text-7xl"
                  : "hidden"
              }
            >
              {isImpCommunity ? "Imprevisto della Community" : "IMPREVISTO!"}
            </h2>

            {!isImpCommunity ? (
              <>
                <h3
                  style={{ filter: "drop-shadow(.05rem .05rem 0.1rem #000)" }}
                  className="flex-1 text-4xl font-extrabold uppercase md:text-6xl"
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Handlee', cursive",
                    filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
                  }}
                  className="mt-4 flex-1 text-2xl md:text-4xl"
                >
                  {description}
                </p>
                {/* Eccezione imprevisto n. 28 */}
                <p className="text-xl italic">
                  {id === 8 || id === 16
                    ? "Non applicabile se il giocatore estratto è in prestito. In tal caso si ripete l’estrazione."
                    : ""}
                </p>
              </>
            ) : (
              <>
                <FetchImprevisto />
                <SecondaEstrazione />
              </>
            )}
          </>
        )}
      </LayoutBase>
      {Dado(estraiNumeroCasuale)}
    </>
  );
};

export default Settimana;
