import React, { useState } from "react";
import { randomNumber } from "../Funzioni/RandomNumber";
import datiPrepartita from "../Data/datiPrepartita";
import SecondaEstrazione from "../Components/SecondaEstrazione";
import FetchImprevisto from "../Funzioni/FetchImprevisto";
import { motion } from "framer-motion";
import LayoutBase from "../Components/LayoutBase";
import Dado from "../Components/Dado";
import SecondaEstrazioneDiretta from "../Components/SecondaEstrazioneDiretta";

const Prepartita = () => {
  const [casuale, setCasuale] = useState(null);

  // Prima Estrazione

  const estraiNumeroCasuale = () => {
    setCasuale(randomNumber(datiPrepartita));
  };

  const { id, title, description, isImprev, ultEstrazione } = casuale
    ? datiPrepartita[casuale - 1]
    : {};

  const titoloH1 = "Imprevisto Prepartita";
  const isImpCommunity = title === "PAROLA ALLA COMMUNITY!";
  const numbExtrPlayer = id === 21 ? 5 : 3

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
              initial={{ opacity: 0, x: "50vw", rotate: 0 }}
              animate={{ opacity: 1, x: 0, rotate: 360 }}
              transition={{ type: "spring", duration: 0.5, stiffness: 400 }}
              style={{
                filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300/20 p-8 text-4xl md:self-start md:p-10 md:text-5xl"
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
                  ? "md:flex-1 text-5xl font-extrabold uppercase md:text-6xl md:absolute md:top-2"
                  : "hidden"
              }
            >
              {isImpCommunity ? "Imprevisto della Community" : "IMPREVISTO!"}
            </h2>
            {!isImpCommunity ? (
              <>
                <h3
                  style={{ filter: "drop-shadow(.05rem .05rem 0.1rem #000)" }}
                  className={`md:flex-1 text-4xl font-extrabold uppercase md:text-5xl ${
                    title === "PAROLA ALLA COMMUNITY!" && "hidden"
                  }`}
                >
                  {title}
                </h3>
                <p
                  style={{ fontFamily: "'Handlee', cursive" }}
                  className="mt-4 md:flex-1 px-4 text-xl md:text-3xl"
                >
                  {description}
                </p>
                {/* Eccezione imprevisto n. 28 */}
                <p className="text-sm md:text-lg italic">
                  {id === 26
                    && "Attenzione! Imprevisto applicabile una sola volta per stagione"
                    }
                  {id === 28
                    && "Attenzione! Non si applica alle partite determinanti (es. turni di ritorno, partite secche, scontri diretti)"
                    }
                </p>
              </>
            ) : (
              <>
                <FetchImprevisto />
              </>
            )}
            {ultEstrazione && (id !== 21 && id !== 28) ? <SecondaEstrazione /> : ""}
            {ultEstrazione && (id === 21 || id === 28) ? <SecondaEstrazioneDiretta numbExtrPlayer={numbExtrPlayer} /> : ""}
          </>
        )}
      </LayoutBase>
      {Dado(estraiNumeroCasuale)}
    </>
  );
};

export default Prepartita;
