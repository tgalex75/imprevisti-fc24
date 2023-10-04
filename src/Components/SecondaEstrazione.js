import React, { useState } from "react";
import firstkit from "../assets/imgs/firstKit.png";
import awaykit from "../assets/imgs/awayKit.png";
import thirdkit from "../assets/imgs/thirdKit.png";

const SecondaEstrazione = () => {
    const [inputField, setInputField] = useState({
        randomPlayerNum: "",
    });

    function handleChange(event) {
        setInputField((prevInputField) => {
            return {
                ...prevInputField,
                [event.target.name]: event.target.value,
            };
        });
    }

    const [secondExtractedNumber, setSecondExtractedNumber] = useState(null);

    const [randomJersey, setRandomJersey] = useState(null);

    const teamKits = [firstkit, awaykit, thirdkit];

    const genSecondRandomNumber = () => {
        setSecondExtractedNumber(
            Math.floor(Math.random() * inputField.randomPlayerNum) + 1
        );
        setRandomJersey(Math.floor(Math.random() * 3) + 1);
    };

    // console.log(randomJersey);

    return (
        <section className="px-12 py-2 w-3/4 h-[30vh] flex items-center justify-around border rounded-md">
            <div className="flex flex-col items-center justify-around h-full">
                <div className=" relative ">
                    <label for="name-with-label" className="text-gray-300">
                        A chi toccherà oggi?
                    </label>
                    <input
                        onChange={handleChange}
                        value={inputField.randomPlayerNum}
                        type="number"
                        id="input-estrazione-giocatore"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        name="randomPlayerNum"
                        placeholder="11 o 18?"
                    />
                </div>
                <button
                    type="button"
                    onClick={genSecondRandomNumber}
                    className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                    Estrai
                </button>
            </div>
            {secondExtractedNumber && (
                <div
                    className="transition-all p-12 rounded bg-no-repeat bg-contain bg-center overflow-hidden flex items-center justify-center w-1/3 h-full"
                    style={{
                        backgroundImage: `url(${teamKits[randomJersey - 1]})`,
                    }}
                >
                    <span
                        style={
                            randomJersey === 2 ? { color: "var(--clr-sec" } : {}
                        }
                        className="pt-4 pb-2 pl-4 pr-4 font-['Oswald'] text-gray-300 text-7xl font-bold relative bottom-0 block"
                    >
                        {secondExtractedNumber}
                    </span>
                </div>
            )}
        </section>
    );
};

export default SecondaEstrazione;
