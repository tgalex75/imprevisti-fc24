import React, { useState } from "react";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { randomNumber } from "../Funzioni/RandomNumber";
import datiSerieNegativa from "../Data/datiSerieNegativa";
import SecondaEstrazione from "../Components/SecondaEstrazione";

const SerieNegativa = () => {
    const [casuale, setCasuale] = useState(null);

    const [counterNotteBrava, setCounterNotteBrava] = useState(0);

    // Prima Estrazione

    const estraiNumeroCasuale = () => {
        setCasuale(randomNumber(datiSerieNegativa));
        aumentaNotteBrava();
    };

    const { id, title, description, isImprev, ultEstrazione } = casuale
        ? datiSerieNegativa[casuale - 1]
        : {};

    const aumentaNotteBrava = () => {
        if (id === 6) {
            setCounterNotteBrava((prevCounter) => prevCounter + 1);
        } else {
            return counterNotteBrava;
        }
    };
    console.log(counterNotteBrava);
    return (
        <section className="font-bold flex flex-col justify-around gap-12 items-center min-h-[75vh] w-full py-4">
            <h1 className="text-3xl select-none">Imprevisto Serie Negativa</h1>
            {/* BOX PRIMA ESTRAZIONE */}
            <div
                id="containerPrimaEstrazione"
                style={isImprev ? { color: "var(--clr-prim)" } : {}}
                className="flex flex-col py-8 justify-around items-center select-none border border-[--clr-prim] rounded-lg w-3/4 min-h-[50vh] "
            >
                {/* <span className="text-7xl">{casuale}</span> */}
                <h2
                    className={
                        isImprev
                            ? "text-4xl font-extrabold uppercase"
                            : "hidden"
                    }
                >
                    imprevisto!
                </h2>
                <h3 className="text-5xl font-extrabold uppercase">{title}</h3>
                <p className="text-2xl">{description}</p>
                {/* Eccezione Notte Brava */}
                <p className="italic">
                    {id === 6 && counterNotteBrava > 0
                        ? "Attenzione! Non si applica alle partite determinanti (es. turni di ritorno, partite secche, scontri diretti)"
                        : ""}
                </p>
                {ultEstrazione ? <SecondaEstrazione /> : ""}

            </div>

            <div className="cursor-pointer flex h-auto items-center justify-center rounded-full p-2 hover:bg-black/30 absolute right-48 bottom-36">
                <GiPerspectiveDiceSixFacesRandom
                    style={{
                        filter: "drop-shadow(.25rem .25rem 0.15rem #222)",
                    }}
                    size={72}
                    className="hover:fill-gray-200 transition-all  active:scale-125 active:-rotate-12 hover:rotate-6 hover:ease-[cubic-bezier(0.680, -0.550, 0.265, 1.550)]"
                    onClick={estraiNumeroCasuale}
                />
            </div>
        </section>
    );
};

export default SerieNegativa;
