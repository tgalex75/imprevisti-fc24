import React, { useState } from "react";
import Dado from "../Components/Dado";
import { motion } from "framer-motion";

const Rinnovi = () => {
  const [casuale, setCasuale] = useState(null);

  const estraiNumeroCasuale = () => {
    setCasuale(Math.floor(Math.random() * 10) + 1);
  };

  const isImpr = casuale === 8;

  return (
    <section className="flex min-h-[75vh] w-full flex-col items-center justify-around gap-12 py-4 font-bold">
      <h1>Imprevisto Rinnovi</h1>
      {/* BOX PRIMA ESTRAZIONE */}
      <motion.div
        initial={{ opacity: 0, x: "-10vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.4, type: "spring" }}
        key={casuale}
        id="containerPrimaEstrazione"
        style={isImpr ? { color: "var(--clr-prim)" } : {}}
        className="flex min-h-[50vh] w-3/4 select-none flex-col items-center justify-around gap-4 rounded-xl border-8 border-[--clr-sec] bg-black/50 px-12 py-8 shadow-lg ring ring-inset ring-white/75"
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
              className="flex h-8 w-8 items-center justify-center self-start rounded-full bg-gray-300/20 p-8 text-4xl"
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
                  ? "text text-7xl font-extrabold uppercase tracking-wider"
                  : "hidden"
              }
            >
              imprevisto!
            </h2>
            <h3 className="text-6xl font-extrabold uppercase">Mercenario</h3>
            <p
              style={{ fontFamily: "'Handlee', cursive" }}
              className="mt-4 text-4xl"
            >
              Raddoppia l'ingaggio o cessione obbligatoria
            </p>
          </>
        ) : (
          casuale && (
            <>
              <motion.p
                initial={{ opacity: 0, x: "50vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring" }}
                className="flex h-8 w-8 items-center justify-center self-start rounded-full bg-gray-300/20 p-8 text-4xl"
              >
                {casuale}
              </motion.p>
              <h3 className="text-6xl font-extrabold uppercase">
                Nessun problema
              </h3>
              <p
                style={{ fontFamily: "'Handlee', cursive" }}
                className="mt-4 text-4xl"
              >
                Gestisci la trattativa liberamente
              </p>
            </>
          )
        )}
      </motion.div>
      {Dado(estraiNumeroCasuale)}
    </section>
  );
};

export default Rinnovi;
