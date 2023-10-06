import React, { useState } from "react";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

const OfferteMercato = () => {
    const [casuale, setCasuale] = useState(null);

    const estraiNumeroCasuale = () => {
        setCasuale(Math.floor(Math.random() * 10) + 1);
    };
    console.log(casuale);

    const isImpr = casuale === 5;

    return (
        <section className="font-bold flex flex-col justify-around gap-12 items-center min-h-[75vh] w-full py-4">
            <h1>Imprevisto Offerte dal Calciomercato</h1>
            {/* BOX PRIMA ESTRAZIONE */}
            <div
                id="containerPrimaEstrazione"
                style={isImpr ? { color: "var(--clr-prim)" } : {}}
                className="flex flex-col gap-4 py-8 px-12 justify-around items-center select-none ring ring-inset ring-white/75 border-8 border-[--clr-sec] shadow-lg rounded-xl w-3/4 min-h-[50vh] "
            >
                {!casuale && (
                    <h2
                        style={{ fontFamily: "'Handlee', cursive" }}
                        className="italic text-5xl"
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
                                    ? "text-7xl text font-extrabold uppercase tracking-wider"
                                    : "hidden"
                            }
                        >
                            imprevisto!
                        </h2>
                        <h3 className="text-5xl font-extrabold uppercase">
                            Mercenario
                        </h3>
                        <p
                            style={{ fontFamily: "'Handlee', cursive" }}
                            className="text-3xl mt-4"
                        >
                            Accetta l'offerta o raddoppia l'ingaggio appena possibile
                        </p>
                    </>
                ) : (
                    casuale && (
                        <>
                            <h3 className="text-5xl font-extrabold uppercase">
                            Bilancio in ordine
                            </h3>
                            <p
                                style={{ fontFamily: "'Handlee', cursive" }}
                                className="text-3xl mt-4"
                            >
                                Totale libertà di scelta 
                            </p>
                        </>
                    )
                )}
            </div>

            <div className="cursor-pointer flex h-auto items-center justify-center rounded-full p-2 hover:bg-black/30 absolute right-48 bottom-28">
                <GiPerspectiveDiceSixFacesRandom
                    style={{
                        filter: "drop-shadow(.25rem .25rem 0.15rem #222)",
                    }}
                    size={96}
                    className="hover:fill-gray-200 transition-all  active:scale-125 active:-rotate-12 hover:rotate-6 hover:ease-[cubic-bezier(0.680, -0.550, 0.265, 1.550)]"
                    onClick={estraiNumeroCasuale}
                />
            </div>
        </section>
    );
};

export default OfferteMercato;
