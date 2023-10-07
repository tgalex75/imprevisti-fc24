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
    <section className="flex min-h-[75vh] w-full select-none flex-col items-center justify-around gap-12 overflow-hidden py-4 font-bold">
      <h1>Imprevisto Prepartita</h1>
      {/* BOX PRIMA ESTRAZIONE */}
      <div
        id="containerPrimaEstrazione"
        style={isImprev ? { color: "var(--clr-prim)" } : {}}
        className="flex min-h-[50vh] w-3/4 select-none flex-col items-center justify-around gap-4 rounded-xl border-8 border-[--clr-sec] bg-black/50 px-12 py-8 shadow-lg ring ring-inset ring-white/75"
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
            <h2
              style={{
                fontFamily: "'Gochi Hand', cursive",
                filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
              }}
              className={
                isImprev
                  ? "text text-7xl font-extrabold uppercase tracking-wider"
                  : "hidden"
              }
            >
              imprevisto!
            </h2>
            <h3 className="text-5xl font-extrabold uppercase">{title}</h3>
            <p
              style={{ fontFamily: "'Handlee', cursive" }}
              className="mt-4 text-3xl"
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
        {/* <== DELAY CON FRAMER MOTION? */}
      </div>

      {Dado(estraiNumeroCasuale)}
    </section>
  );
};

export default Prepartita;
