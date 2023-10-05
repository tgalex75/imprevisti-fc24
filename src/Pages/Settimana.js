import React, { useState } from "react";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { randomNumber } from "../Funzioni/RandomNumber";
import datiSettimana from "../Data/datiSettimana";

const Settimana = () => {
    //const [counter, setCounter] = useState(0);

    const [casuale, setCasuale] = useState(null);

    // Prima Estrazione

    const estraiNumeroCasuale = () => {
        setCasuale(randomNumber(datiSettimana));
    };

    const { id, title, description, isImprev } = casuale
        ? datiSettimana[casuale - 1]
        : {};


    return (
        <section className="font-bold flex flex-col justify-around gap-12 items-center min-h-[75vh] w-full py-4">
            <h1 className="text-3xl select-none">Imprevisto Settimana</h1>
            {/* BOX PRIMA ESTRAZIONE */}
            <div
                id="containerPrimaEstrazione"
                style={isImprev ? { color: "var(--clr-prim)" } : {}}
                className="flex flex-col py-8 justify-around items-center select-none border border-[--clr-prim] rounded-lg w-3/4 min-h-[50vh] "
            >
                {/* <span className="text-7xl">{casuale}</span> */}
                <h2 
                className={isImprev ? "text-4xl font-extrabold uppercase" : "hidden"}>
                    imprevisto!
                </h2>
                <h3 className="text-5xl font-extrabold uppercase">{title}</h3>
                <p className="text-2xl">{description}</p>
                                {/* Eccezione imprevisto n. 28 */}
                                <p className="italic">
                    {id === 8 || id === 16
                        ? "Non applicabile se il giocatore estratto è in prestito. In tal caso si ripete l’estrazione."
                        : ""}
                </p>

                
            </div>

            <div className="cursor-pointer flex h-auto items-center justify-center rounded-full p-2 hover:bg-black/30 absolute right-48 bottom-36">
                <GiPerspectiveDiceSixFacesRandom
                    style={{
                        filter: "drop-shadow(.25rem .25rem 0.15rem #222)",
                    }}
                    size={72}
                    className=" hover:fill-gray-200 transition-all  active:scale-125 active:-rotate-12 hover:rotate-6 hover:ease-[cubic-bezier(0.680, -0.550, 0.265, 1.550)]"
                    onClick={estraiNumeroCasuale}
                />
            </div>
        </section>
    );
};

export default Settimana;
