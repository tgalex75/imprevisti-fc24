import React, { useState } from "react";
import Dado from "../Components/Dado";
import { motion } from "framer-motion";

const Ingaggio = () => {
  const [casuale, setCasuale] = useState(null);

  const estraiNumeroCasuale = () => {
    setCasuale(Math.floor(Math.random() * 10) + 1);
  };

  const isImpr = casuale === 7;

  return (
    <section className="flex h-full w-full flex-col text-center items-center justify-around p-4 font-bold">
      <h1>Imprevisto Ingaggio</h1>
      {/* BOX PRIMA ESTRAZIONE */}
      <motion.div
        initial={{ opacity: 0, x: "-10vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.4, type: "spring" }}
        key={casuale}
        id="containerPrimaEstrazione"
        style={isImpr ? { color: "var(--clr-prim)" } : {}}
        className="flex h-[70vh] md:min-h-[60vh] w-full md:w-3/4 select-none flex-col items-center justify-around gap-2 rounded-xl border-8 border-[--clr-sec] bg-black/50 px-12 py-8 shadow-lg ring ring-inset ring-white/75"
      >
        {!casuale && (
          <h2
            style={{ fontFamily: "'Handlee', cursive" }}
            className="text-5xl italic"
          >
            Lancia il dado...
          </h2>
        )}

        {casuale && isImpr ? (
          <>
            <motion.p
              initial={{ opacity: 0, x: "50vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring" }}
              className="flex h-8 w-8 items-center justify-center md:self-start rounded-full bg-gray-300/20 p-8 text-4xl"
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
                  ? "text-6xl md:text-7xl font-extrabold uppercase tracking-wider"
                  : "hidden"
              }
            >
              imprevisto!
            </h2>
            <h3 className="text-5xl md:text-7xl font-extrabold uppercase">
              VISITE NON SUPERATE
            </h3>
            <p
              style={{ fontFamily: "'Handlee', cursive" }}
              className="mt-4 text-2xl md:text-4xl"
            >
              la trattativa salta e non può essere ritentata fino alla prossima
              finestra di mercato.
            </p>
          </>
        ) : (
          casuale && (
            <>
              <motion.p
                initial={{ opacity: 0, x: "50vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring" }}
                className="flex h-8 w-8 items-center justify-center md:self-start rounded-full bg-gray-300/20 p-8 text-4xl"
              >
                {casuale}
              </motion.p>
              <h3 className="text-5xl md:text-7xl font-extrabold uppercase">
                Nessun problema
              </h3>
              <p
                style={{ fontFamily: "'Handlee', cursive" }}
                className="mt-4 text-2xl md:text-4xl"
              >
                La trattativa viene chiusa senza conseguenze.
              </p>
            </>
          )
        )}
      </motion.div>

      {Dado(estraiNumeroCasuale)}
    </section>
  );
};

export default Ingaggio;
