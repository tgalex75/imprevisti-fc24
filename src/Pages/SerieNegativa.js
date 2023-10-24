import React, { useState, useContext, useRef } from "react";
import Dado from "../Components/Dado";
import { randomNumber } from "../Funzioni/RandomNumber";
import { CartContext } from "../context/cart";
import datiSerieNegativa from "../Data/datiSerieNegativa";
import SecondaEstrazione from "../Components/SecondaEstrazione";
import RegistroImprevisti from "../Components/RegistroImprevisti";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

const SerieNegativa = () => {
  const [casuale, setCasuale] = useState(4);

  const inputRef = useRef(null);

  const { cartItems, addToCart } = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);

  const toggle = () => {
    setShowModal(!showModal);
  };

  // Prima Estrazione

  const estraiNumeroCasuale = () => {
    setCasuale(randomNumber(datiSerieNegativa));
  };

  const { id, title, description, isImprev, ultEstrazione } = casuale
    ? datiSerieNegativa[casuale - 1]
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
        className="flex h-full w-full select-none flex-col items-center justify-evenly rounded-xl bg-black/50 gap-2 px-4 py-2 text-center shadow-lg ring ring-inset ring-white/75 md:px-10"
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
            <div className="flex flex-col items-center justify-center h-full w-full gap-2 py-4 md:py-2">
              <h2
                style={{
                  fontFamily: "'Gochi Hand', cursive",
                  filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
                }}
                className={
                  isImprev
                    ? "flex-1 text-3xl font-extrabold uppercase md:text-7xl"
                    : "hidden"
                }
              >
                imprevisto!
              </h2>
              <h3 className="flex-1 text-3xl font-extrabold uppercase md:text-6xl">
                {title}
              </h3>
              <p
                style={{ fontFamily: "'Handlee', cursive" }}
                className="text-md px-4 md:flex-1 md:text-4xl"
              >
                {description}
              </p>
            </div>

            {ultEstrazione ? <SecondaEstrazione /> : ""}
            {id > 3 && (
                <div className="w-full md:w-3/4">
                  <label
                    htmlFor="nome-giocatore"
                    className="mb-1 inline-block text-xs text-gray-300 md:text-sm"
                  >
                    Giocatore da iscrivere sul registro
                  </label>
                  <div className="flex h-1/2 items-center justify-between gap-1 md:gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      id="nome-giocatore"
                      className="w-1/3 md:w-2/5 h-full appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-1 md:px-4 py-2 text-xs md:text-sm text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                      name="nomeGiocatore"
                      placeholder={isMobile ? "Nome..." : "Fuori il nome..."}
                    />
                    <button
                      type="button"
                      className="flex-1 flex items-center justify-center h-full rounded-lg bg-sky-700 px-4 py-2 text-center text-xs md:text-sm font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 "
                      onClick={() =>
                        addToCart({
                          title: `${title} - ${inputRef.current.value}`,
                        })
                      }
                    >
                      Invia
                    </button>
                    {!showModal && (
                      <button
                        type="button"
                        className="flex-1 flex items-center justify-center h-full rounded-lg bg-orange-700 px-2 py-2 text-center text-xs md:text-sm font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 "
                        onClick={toggle}
                      >
                        {isMobile ? "Registro" : "Apri Registro"} ({cartItems.length})
                      </button>
                    )}
                  </div>
                </div>
            )}
          </>
        )}
      </motion.div>

      {Dado(estraiNumeroCasuale)}
      <RegistroImprevisti showModal={showModal} toggle={toggle} />
    </section>
  );
};

export default SerieNegativa;
