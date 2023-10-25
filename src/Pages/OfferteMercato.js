import React, { useState } from "react";
import Dado from "../Components/Dado";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

const OfferteMercato = () => {
  const [casuale, setCasuale] = useState(null);

  const estraiNumeroCasuale = () => {
    setCasuale(Math.floor(Math.random() * 10) + 1);
  };

  const isImpr = casuale === 5;

  return (
    <section className="flex h-full w-full select-none flex-col items-center justify-around gap-2 px-4 py-6 font-bold md:p-8">
      <h1>{isMobile ? "Calciomercato" : "Imprevisto Offerte Calciomercato"}</h1>
      {/* BOX PRIMA ESTRAZIONE */}
      <motion.div
        initial={{ opacity: 0, x: "-10vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.4, type: "spring" }}
        key={casuale}
        id="containerPrimaEstrazione"
        style={isImpr ? { color: "var(--clr-prim)" } : {}}
        className="flex h-full w-full select-none flex-col items-center justify-around rounded-xl bg-black/50 px-4 pb-4 text-center shadow-lg ring ring-inset ring-white/75 md:px-10 md:pb-8"
      >
        {!casuale && (
          <h2
            style={{ fontFamily: "'Handlee', cursive" }}
            className="text-5xl italic"
          >
            Lancia il dado...
          </h2>
        )}

        {casuale && (
          <>
            <motion.p
              initial={{ opacity: 0, x: "50vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring" }}
              className="flex h-8 w-8 items-center justify-around rounded-full bg-gray-300/20 p-8 text-4xl md:self-start md:p-12 md:text-6xl"
            >
              {casuale}
            </motion.p>

            <h2
              style={{
                fontFamily: "'Gochi Hand', cursive",
                filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
              }}
              className={
                isImpr
                  ? "text-5xl font-extrabold uppercase md:text-7xl"
                  : "hidden"
              }
            >
              imprevisto!
            </h2>
            <h3 className="text-4xl font-extrabold uppercase md:text-6xl">
              {isImpr ? "Mercenario" : "Bilancio in Ordine"}
            </h3>
            <p
              style={{ fontFamily: "'Handlee', cursive" }}
              className="mt-4 px-4 text-2xl md:w-3/5 md:text-4xl"
            >
              {isImpr
                ? "Accetta l'offerta o raddoppia l'ingaggio appena possibile"
                : "Totale libertà di scelta"}
            </p>
          </>
        )}
      </motion.div>

      {Dado(estraiNumeroCasuale)}
    </section>
  );
};

export default OfferteMercato;
