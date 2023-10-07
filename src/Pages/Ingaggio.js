import React, { useState } from "react";
import Dado from "../Components/Dado";

const Ingaggio = () => {
  const [casuale, setCasuale] = useState(null);

  const estraiNumeroCasuale = () => {
    setCasuale(Math.floor(Math.random() * 10) + 1);
  };
  console.log(casuale);

  const isImpr = casuale === 7;

  return (
    <section className="flex min-h-[75vh] w-full flex-col items-center justify-around gap-12 py-4 font-bold">
      <h1>Imprevisto Ingaggio</h1>
      {/* BOX PRIMA ESTRAZIONE */}
      <div
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
            <h3 className="text-5xl font-extrabold uppercase">
              VISITE NON SUPERATE
            </h3>
            <p
              style={{ fontFamily: "'Handlee', cursive" }}
              className="mt-4 text-3xl"
            >
              la trattativa salta e non può essere ritentata fino alla prossima
              finestra di mercato.
            </p>
          </>
        ) : (
          casuale && (
            <>
              <h3 className="text-5xl font-extrabold uppercase">
                Nessun problema
              </h3>
              <p
                style={{ fontFamily: "'Handlee', cursive" }}
                className="mt-4 text-3xl"
              >
                La trattativa viene chiusa senza conseguenze.
              </p>
            </>
          )
        )}
      </div>

      {Dado(estraiNumeroCasuale)}
    </section>
  );
};

export default Ingaggio;
