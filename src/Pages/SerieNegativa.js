import React, { useState, useContext,  } from "react";
import Dado from "../Components/Dado";
import { initialMessage } from "../Components/InitialMessage";
import { CartContext } from "../context/regContext";
import SecondaEstrazione from "../Components/SecondaEstrazione";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import random from "random";

const SerieNegativa = () => {
  const { serienegativa } = useContext(CartContext);

  const [casuale, setCasuale] = useState(null);

  const fetchList = () => {
    setCasuale(serienegativa?.length > 0 ? random.choice(serienegativa) : initialMessage);
  };

  
  const { titolo, descrizione, isImprev, ultEstrazione } = casuale
  ? casuale
  : {};
  
  return (
    <section className="flex h-full w-full select-none flex-col items-center justify-around gap-2 px-4 py-6 font-bold md:p-8">
      <h1>{isMobile ? "Serie Negativa" : "Imprevisto Serie Negativa"}</h1>

      {/* BOX PRIMA ESTRAZIONE */}
      <motion.div
        initial={{ opacity: 0, x: "-10vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.4, type: "spring" }}
        key={casuale}
        id="containerPrimaEstrazione"
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
            <div className="flex h-full w-full flex-col items-center justify-around py-4 md:w-3/4 md:py-2">
              <h2
                style={{
                  fontFamily: "'Boogaloo', sans-serif",
                  filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
                }}
                className={
                  isImprev
                    ? "text-3xl font-extrabold uppercase md:flex-1 md:text-7xl"
                    : "hidden"
                }
              >
                imprevisto!
              </h2>
              <h3
                style={{ filter: "drop-shadow(.05rem .05rem 0.1rem #000)" }}
                className="flex items-center justify-center text-3xl font-extrabold uppercase md:flex-1 md:text-6xl"
              >
                {titolo}
              </h3>
              {isImprev > 0 && (
                <p
                  style={{
                    fontFamily: "'Handlee', cursive",
                    filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
                  }}
                  className="text-md px-4 md:w-3/4 md:flex-1 md:text-2xl"
                >
                  {descrizione}
                </p>
              )}
              {ultEstrazione > 0 && <SecondaEstrazione />}
            </div>
          </>
        )}
      </motion.div>

      {Dado(fetchList)}
    </section>
  );
};

export default SerieNegativa;
