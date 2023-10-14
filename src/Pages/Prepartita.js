import React, { useState } from "react";
import Dado from "../Components/Dado";
import { randomNumber } from "../Funzioni/RandomNumber";
import datiPrepartita from "../Data/datiPrepartita";
import SecondaEstrazione from "../Components/SecondaEstrazione";
import ImprevistoCommunity from "../Components/ImprevistoCommunity";
import { motion } from "framer-motion";

const Prepartita = () => {
  const [casuale, setCasuale] = useState(null);

  // Prima Estrazione

  const estraiNumeroCasuale = () => {
    setCasuale(randomNumber(datiPrepartita));
  };

  const { id, title, description, isImprev, ultEstrazione } = casuale
    ? datiPrepartita[casuale - 1]
    : {};

  return (
    <section className="flex h-full w-full select-none flex-col items-center justify-between md:justify-around gap-4 pb-24 md:pb-12 px-4 font-bold">
      <h1>Imprevisto Prepartita</h1>
      {/* BOX PRIMA ESTRAZIONE */}
      <motion.div
        initial={{ opacity: 0, x: "-10vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.4, type: "spring" }}
        key={casuale}
        id="containerPrimaEstrazione"
        style={isImprev ? { color: "var(--clr-prim)" } : {}}
        className="flex h-full w-full md:w-3/4 select-none flex-col items-center justify-around rounded-xl border-4 md:border-8 border-[--clr-sec] bg-black/50 px-4 md:px-10 text-center shadow-lg ring ring-inset ring-white/75"
      >
        {!casuale ? (
          <h2
            style={{ fontFamily: "'Handlee', cursive" }}
            className="text-5xl italic"
          >
            Lancia il dado...
          </h2>
        ) : (
          <>
            <motion.p
              initial={{ opacity: 0, x: "50vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring" }}
              className="flex h-8 w-8 items-center justify-center self-start rounded-full bg-gray-300/20 p-8 text-4xl"
            >
              {id}
            </motion.p>
            <h2
              style={{
                fontFamily: "'Gochi Hand', cursive",
                filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
              }}
              className={
                isImprev
                  ? "text-5xl md:text-7xl font-extrabold uppercase tracking-wider"
                  : "hidden"
              }
            >
              imprevisto!
            </h2>
            <h3 className="text-4xl md:text-6xl font-extrabold uppercase">{title}</h3>
            <p
              style={{ fontFamily: "'Handlee', cursive" }}
              className="mt-4 text-2xl md:text-4xl"
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
      </motion.div>

      {Dado(estraiNumeroCasuale)}
    </section>
  );
};

export default Prepartita;