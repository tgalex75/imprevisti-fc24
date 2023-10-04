import React, { useState } from "react";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

const Rinnovi = () => {
    const [casuale, setCasuale] = useState(null);

    const estraiNumeroCasuale = () => {
        setCasuale(Math.floor(Math.random() * 10) + 1);
    };
    console.log(casuale);

    return (
        <section className="font-bold flex flex-col justify-around gap-12 items-center min-h-[75vh] w-full py-4">
            <h1 className="text-3xl select-none">Imprevisto Rinnovi</h1>
            {/* BOX PRIMA ESTRAZIONE */}
            {casuale === 8 ? (
                <div
                    id="containerPrimaEstrazione"
                    style={{ color: "var(--clr-prim)" }}
                    className="flex flex-col py-8 justify-around items-center select-none border border-[--clr-prim] rounded-lg w-3/4 min-h-[50vh] "
                >
                    <h2 className={"text-4xl font-extrabold uppercase"}>
                        imprevisto!
                    </h2>
                    <h3 className="text-5xl font-extrabold uppercase">
                        Mercenario
                    </h3>
                    <p className="text-2xl">
                        Raddoppia l'ingaggio o cessione obbligatoria
                    </p>
                </div>
            ) : (
                <div
                    id="containerPrimaEstrazione"
                    className="flex flex-col py-8 justify-around items-center select-none border border-[--clr-prim] rounded-lg w-3/4 min-h-[50vh] "
                >
                    <h3 className="text-5xl font-extrabold uppercase">
                        Nessun problema
                    </h3>
                    <p className="text-2xl">
                        Gestisci la trattativa liberamente
                    </p>
                </div>
            )}
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

export default Rinnovi;
