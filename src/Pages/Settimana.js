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
    <section className="flex h-full w-full select-none flex-col items-center justify-around gap-2 px-4 py-6 font-bold md:p-8">
      <h1 className="">Imprevisto Settimana</h1>
      {/* BOX PRIMA ESTRAZIONE */}
      <motion.div
        initial={{ opacity: 0, x: "-10vw" }}
        animate={{ opacity: 1, x: 0 }}
        id="containerPrimaEstrazione"
        key={casuale}
        style={isImprev ? { color: "var(--clr-prim)" } : {}}
        className="flex h-full w-full select-none flex-col items-center justify-evenly gap-2 rounded-xl bg-black/50 px-4 py-2 text-center shadow-lg ring ring-inset ring-white/75 md:px-10"
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
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300/20 p-8 text-4xl md:self-start md:p-12 md:text-6xl"
              style={{
                filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
              }}
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
              style={{
                fontFamily: "'Handlee', cursive",
                filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
              }}
              className="mt-4 flex-1 text-2xl md:text-4xl"
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
