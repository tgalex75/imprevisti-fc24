import React, { useState } from "react";
import { randomNumber } from "../Funzioni/RandomNumber";
import datiPrepartita from "../Data/datiPrepartita";
import SecondaEstrazione from "../Components/SecondaEstrazione";
import ImprevistoCommunity from "../Components/ImprevistoCommunity";
import { motion } from "framer-motion";
import LayoutBase from "../Components/LayoutBase";
import Dado from "../Components/Dado";

const PrepartitaCopy = () => {
  const [casuale, setCasuale] = useState(null);

  // Prima Estrazione

  const estraiNumeroCasuale = () => {
    setCasuale(randomNumber(datiPrepartita));
  };

  const { id, title, description, isImprev, ultEstrazione } = casuale
    ? datiPrepartita[casuale - 1]
    : {};

  const titoloH1 = "Imprevisto Prepartita";

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
              imprevisto!
            </h2>
            <h3
              style={{ filter: "drop-shadow(.05rem .05rem 0.1rem #000)" }}
              className="flex-1 text-4xl font-extrabold uppercase md:text-6xl"
            >
              {title}
            </h3>
            <p
              style={{ fontFamily: "'Handlee', cursive" }}
              className="mt-4 flex-1 px-4 text-2xl md:text-4xl"
            >
              {description}
            </p>
            {/* Eccezione imprevisto n. 28 */}
            <p className="italic">
              {id === 28
                ? "Attenzione! Non si applica alle partite determinanti (es. turni di ritorno, partite secche, scontri diretti)"
                : ""}
            </p>
            {ultEstrazione ? <SecondaEstrazione /> : ""}
            {title === "PAROLA ALLA COMMUNITY!" ? (
              <ImprevistoCommunity />
            ) : (
              ""
            )}{" "}
          </>
        )}
      </LayoutBase>
      {Dado(estraiNumeroCasuale)}
    </>
  );
};

export default PrepartitaCopy;
