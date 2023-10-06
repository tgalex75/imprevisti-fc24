import React, { useState } from "react";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { randomNumber } from "../Funzioni/RandomNumber";
import datiPrepartita from "../Data/datiPrepartita";
import SecondaEstrazione from "../Components/SecondaEstrazione";
import ImprevistoCommunity from "../Components/ImprevistoCommunity";

const Prepartita = () => {
    //const [counter, setCounter] = useState(0);

    const [casuale, setCasuale] = useState(null);

    // Prima Estrazione

    const estraiNumeroCasuale = () => {
        setCasuale(randomNumber(datiPrepartita));
    };

    const { id, title, description, isImprev, ultEstrazione } = casuale
        ? datiPrepartita[casuale - 1]
        : {};

    return (
        <section className="font-bold flex flex-col justify-around gap-12 items-center min-h-[75vh] w-full py-4 select-none">
            <h1>Imprevisto Prepartita</h1>
            {/* BOX PRIMA ESTRAZIONE */}
            <div
                id="containerPrimaEstrazione"
                style={isImprev ? { color: "var(--clr-prim)" } : {}}
                className="flex flex-col gap-4 py-8 px-12 justify-around items-center select-none ring ring-inset ring-white/75 border-8 border-[--clr-sec] shadow-lg rounded-xl w-3/4 min-h-[50vh] "
            >
                {!casuale ? (
                    <h2
                        style={{ fontFamily: "'Handlee', cursive" }}
                        className="italic text-5xl"
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
                                    ? "text-7xl text font-extrabold uppercase tracking-wider"
                                    : "hidden"
                            }
                        >
                            imprevisto!
                        </h2>
                        <h3 className="text-5xl font-extrabold uppercase">
                            {title}
                        </h3>
                        <p
                            style={{ fontFamily: "'Handlee', cursive" }}
                            className="text-3xl mt-4"
                        >
                            {description}
                        </p>
                        {/* Eccezione imprevisto n. 28 */}
                        <p className="italic">
                            {id === 28
                                ? "Attenzione! Non si applica alle partite determinanti (es. turni di ritorno, partite secche, scontri diretti)"
                                : ""}
                        </p>
                        {ultEstrazione ? <SecondaEstrazione /> : ""}
                        {title === "PAROLA ALLA COMMUNITY!" ? (
                            <ImprevistoCommunity />
                        ) : (
                            ""
                        )}{" "}
                    </>
                )}
                {/* <== DELAY CON FRAMER MOTION? */}
            </div>

            <div className="cursor-pointer flex h-auto items-center justify-center rounded-full p-2 hover:bg-black/30 absolute right-48 bottom-28">
                <GiPerspectiveDiceSixFacesRandom
                    style={{
                        filter: "drop-shadow(.25rem .25rem 0.15rem #222)",
                    }}
                    size={96}
                    className=" hover:fill-gray-200 transition-all active:scale-125 active:-rotate-12 hover:rotate-6 hover:ease-[cubic-bezier(0.680, -0.550, 0.265, 1.550)]"
                    onClick={estraiNumeroCasuale}
                />
            </div>
        </section>
    );
};

export default Prepartita;
