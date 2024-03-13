import React, { useState, useEffect } from "react";
import SecondaEstrazione from "../Components/SecondaEstrazione";
import SecondaEstrazioneDiretta from "../Components/SecondaEstrazioneDiretta";
import FetchImprevisto from "../Funzioni/FetchImprevisto";
import LayoutBase from "../Components/LayoutBase";
import Dado from "../Components/Dado";
import random from "random";

const Prepartita = () => {
  const [casualePre, setCasualePre] = useState(() => {
    const saved = localStorage.getItem("casualePre");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  // Prima Estrazione

  useEffect(() => {
    localStorage.setItem("casualePre", JSON.stringify(casualePre));
  })

  const fetchList = () => {
    setCasualePre(random.choice(casualePre));
  };

  const { titolo, descrizione, isImprev, ultEstrazione, extractedPl } = casualePre
    ? casualePre
    : {};

  const titoloH1 = "Imprevisto Prepartita";
  const isImpCommunity = titolo === "IMPREVISTO SPECIALE";

  return (
    <>
      <LayoutBase titoloH1={titoloH1} isImprev={isImprev} casualePre={casualePre}>
        {casualePre && (
          <section className="flex h-full w-full flex-col items-center justify-around">
            <h2
              style={{
                fontFamily: "'Boogaloo', sans-serif",
                filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
              }}
              className={
                isImprev
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
                  {isImprev && descrizione}
                </p>
              </>
            ) : (
              <>
                <FetchImprevisto />
              </>
            )}
            {ultEstrazione && extractedPl === 1 && <SecondaEstrazione />}
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
