import React, { useState } from "react";
import Dado from "../Components/Dado";
import { randomNumber } from "../Funzioni/RandomNumber";
import datiSettimana from "../Data/datiSettimana";
import ImprevistoCommunity from "../Components/ImprevistoCommunity";
import { motion } from "framer-motion";

const Settimana = () => {

  const [casuale, setCasuale] = useState(null);

  // Prima Estrazione

  const estraiNumeroCasuale = () => {
    setCasuale(randomNumber(datiSettimana));
  };

  const { id, title, description, isImprev } = casuale
    ? datiSettimana[casuale - 1]
    : {};

  return (
    <section className=" flex min-h-[75vh] w-full select-none flex-col items-center justify-around gap-12 py-4 font-bold">
      <h1 className="">Imprevisto Settimana</h1>
      {/* BOX PRIMA ESTRAZIONE */}
      <motion.div
        initial={{ opacity: 0, x: "-10vw" }}
        animate={{ opacity: 1, x: 0 }}
        id="containerPrimaEstrazione"
        key={casuale}
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
            <motion.p
              initial={{ opacity: 0, x: "50vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring"}}
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
                  ? "text-7xl font-extrabold uppercase tracking-wider"
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
              {id === 8 || id === 16
                ? "Non applicabile se il giocatore estratto è in prestito. In tal caso si ripete l’estrazione."
                : ""}
            </p>
            {title === "PAROLA ALLA COMMUNITY!" ? ( //DELAY CON FRAMER MOTION?
              <ImprevistoCommunity />
            ) : (
              ""
            )}
          </>
        )}
      </motion.div>

      {Dado(estraiNumeroCasuale)}
    </section>
  );
};

export default Settimana;
