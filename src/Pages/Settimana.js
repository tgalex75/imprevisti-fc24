import React, { useState } from "react";
import Dado from "../Components/Dado";
import { randomNumber } from "../Funzioni/RandomNumber";
import datiSettimana from "../Data/datiSettimana";
import SecondaEstrazione from "../Components/SecondaEstrazione";
import FetchData from "../Funzioni/FetchData";
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
                filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
              }}
              className={
                isImprev
                  ? "text-5xl font-extrabold uppercase md:absolute md:top-2 md:flex-1 md:text-6xl"
                  : "hidden"
              }
            >
              {isImpCommunity ? "Imprevisto della Community" : "IMPREVISTO!"}
            </h2>

            {!isImpCommunity ? (
              <>
                <h3
                  style={{ filter: "drop-shadow(.05rem .05rem 0.1rem #000)" }}
                  className="text-4xl font-extrabold uppercase md:flex-1 md:text-6xl"
                >
                  {title}
                </h3>
                <p
                  style={{
                    filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
                  }}
                  className="mt-4 text-2xl md:flex-1 md:text-3xl italic"
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
                <FetchData />
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
