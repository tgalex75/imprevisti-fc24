import React, { useState, useContext, useRef } from "react";
import Dado from "../Components/Dado";
import { randomNumber } from "../Funzioni/RandomNumber";
import { CartContext } from "../context/cart";
import datiSerieNegativa from "../Data/datiSerieNegativa";
import SecondaEstrazione from "../Components/SecondaEstrazione";
import RegistroImprevisti from "../Components/RegistroImprevisti";
import { motion } from "framer-motion";

const SerieNegativa = () => {
  const [casuale, setCasuale] = useState(null);

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
    <section className="flex h-full w-full select-none flex-col items-center justify-around gap-2 p-12 font-bold">
      <h1 className="select-none text-3xl">Imprevisto Serie Negativa</h1>

      {/* BOX PRIMA ESTRAZIONE */}
      <motion.div
        initial={{ opacity: 0, x: "-10vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.4, type: "spring" }}
        key={casuale}
        id="containerPrimaEstrazione"
        style={isImprev ? { color: "var(--clr-prim)" } : {}}
        className="flex h-full w-3/4 select-none flex-col text-center items-center justify-around rounded-xl border-8 border-[--clr-sec] bg-black/50 px-10 shadow-lg ring ring-inset ring-white/75"
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

            {ultEstrazione ? <SecondaEstrazione /> : ""}
            {id > 3 && (
              <div className="flex justify-around w-3/4">
                <div className="w-3/4">
                  <label
                    htmlFor="nome-giocatore"
                    className="mb-1 inline-block text-sm text-gray-300"
                  >
                    Giocatore da iscrivere sul registro
                  </label>
                  <div className="flex items-center justify-between gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      id="nome-giocatore"
                      className="w-1/2 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-sm text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                      name="nomeGiocatore"
                      placeholder="Fuori il nome..."
                    />
                    <button
                      type="button"
                      className="flex-1 rounded-lg bg-sky-700 px-4 py-2 text-center text-sm font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
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
                        className="flex-1 rounded-lg bg-orange-700 px-4 py-2 text-center text-sm font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
                        onClick={toggle}
                      >
                        Apri Registro ({cartItems.length})
                      </button>
                    )}
                  </div>
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
