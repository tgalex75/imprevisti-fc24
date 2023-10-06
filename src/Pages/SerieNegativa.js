import React, { useState, useEffect, useContext, useRef } from "react";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { randomNumber } from "../Funzioni/RandomNumber";
import { CartContext } from "../context/cart";
import datiSerieNegativa from "../Data/datiSerieNegativa";
import SecondaEstrazione from "../Components/SecondaEstrazione";
import RiepilogoImprevisti from "../Components/RiepilogoImprevisti";

const SerieNegativa = () => {
    const [casuale, setCasuale] = useState(null);

    const inputRef = useRef(null);
    const selectRef = useRef(null);

    const { cartItems, addToCart } = useContext(CartContext);

    const [showModal, setShowModal] = useState(false);

    console.log(cartItems);

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
                {
                    <p className="italic">
                        {id === 6
                            ? "Attenzione! Non si applica alle partite determinanti (es. turni di ritorno, partite secche, scontri diretti)"
                            : ""}
                    </p>
                }
                {ultEstrazione ? <SecondaEstrazione /> : ""}
                {id > 3 && (
                    <div className="p-4 flex justify-around gap-2">
                        <div className=" relative ">
                            <label
                                for="name-with-label"
                                className="text-gray-700"
                            >
                                Nome del Giocatore
                            </label>
                            <input
                                ref={inputRef}
                                type="text"
                                id="nome-giocatore"
                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                name="nomeGiocatore"
                                placeholder="Fuori il nome..."
                            />
                        </div>
                        <label className="text-gray-700" for="animals">
                            Tipo Imprevisto
                            <select
                                ref={selectRef}
                                className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                name="tipo-imprevisto"
                            >
                                <option value="">Seleziona tipo</option>
                                <option value="nottebrava">Notte Brava</option>
                                <option value="gelosia">Gelosia</option>
                                <option value="rivalita">Rivalità</option>
                            </select>
                        </label>

                        <button
                            type="button"
                            className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                            onClick={() =>
                                addToCart({
                                    tipoImprevisto: selectRef.current.value,
                                    title: inputRef.current.value,
                                })
                            }
                        >
                            Invia
                        </button>
                        {!showModal && (
                            <button
                                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                onClick={toggle}
                            >
                                Cart ({cartItems.length})
                            </button>
                        )}
                    </div>
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
            <RiepilogoImprevisti showModal={showModal} toggle={toggle} />
        </section>
    );
};

export default SerieNegativa;
