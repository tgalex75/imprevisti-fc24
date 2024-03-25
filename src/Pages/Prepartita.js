import React, { useState, useContext } from "react";
import SecondaEstrazione from "../Components/SecondaEstrazione";
import SecondaEstrazioneDiretta from "../Components/SecondaEstrazioneDiretta";
import FetchImprevisto from "../Funzioni/FetchImprevisto";
import LayoutBase from "../Components/LayoutBase";
import Dado from "../Components/Dado";
import { CartContext } from "../context/regContext";
import random from "random";

const Prepartita = () => {
  const initialMessage = [
    {
      id: 0,
      titolo: "LISTA VUOTA",
      descrizione:
        "Utilizza l'Editor degli imprevisti per aggiungere quelli che vuoi vengano usati per l'estrazione",
    },
  ];

  const { prepartita } = useContext(CartContext);

  const [casuale, setCasuale] = useState(null);

  const fetchList = () => {
    setCasuale(random.choice(prepartita));
  };

  const { titolo, descrizione, isImprev, ultEstrazione, extractedPl } = casuale
    ? casuale
    : {};

  const titoloH1 = "Imprevisto Prepartita";
  const isImpCommunity = titolo === "IMPREVISTO SPECIALE";

  return (
    <>
      <LayoutBase titoloH1={titoloH1} isImprev={isImprev} casuale={casuale}>
        {casuale && (
          <section className="flex h-full w-full flex-col items-center justify-around">
            <h2
              style={{
                fontFamily: "'Boogaloo', sans-serif",
                filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
              }}
              className={
                isImprev > 0
                  ? "flex h-full items-center text-5xl font-extrabold uppercase md:relative md:top-2 md:text-6xl"
                  : "invisible md:h-full"
              }
            >
              {isImpCommunity ? "Imprevisto SPECIALE" : "IMPREVISTO!"}
            </h2>
            {!isImpCommunity ? (
              <>
                <h3
                  style={{ filter: "drop-shadow(.05rem .05rem 0.1rem #000)" }}
                  className={`flex items-center text-4xl font-extrabold uppercase md:h-full md:text-5xl ${
                    titolo === "IMPREVISTO SPECIALE" && "hidden"
                  }`}
                >
                  {titolo}
                </h3>
                <p
                  style={{ fontFamily: "'Handlee', cursive" }}
                  className="mt-4 px-4 text-xl md:h-full md:text-3xl"
                >
                  {(isImprev > 0) && descrizione}
                </p>
              </>
            ) : (
              <>
                <FetchImprevisto />
              </>
            )}
            {(ultEstrazione > 0) && extractedPl === 1 && <SecondaEstrazione />}
            {extractedPl > 1 && (
              <SecondaEstrazioneDiretta extractedPl={extractedPl} />
            )}
          </section>
        )}
      </LayoutBase>
      {Dado(fetchList)}
    </>
  );
};

export default Prepartita;
