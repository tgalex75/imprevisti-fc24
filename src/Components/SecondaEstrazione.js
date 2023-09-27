import React, { useState } from "react";
import { TERipple, TEInput } from "tw-elements-react";
import firstkit from "../assets/imgs/firstKit.png"
import awaykit from "../assets/imgs/awayKit.png"
import thirdkit from "../assets/imgs/thirdKit.png"

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
    
    const [randomJersey, setRandomJersey] = useState(null)

    const teamKits = [firstkit, awaykit, thirdkit]

    const genSecondRandomNumber = () => {
        setSecondExtractedNumber(
            Math.floor(Math.random() * inputField.randomPlayerNum) + 1
        );
        setRandomJersey(
            Math.floor(Math.random() * 3) + 1
        )
    };


    console.log(randomJersey);

    return (
        <section className="p-12 w-3/4 gap-12 max-h-[50%] flex items-center justify-between border rounded-md">
            <TEInput
                type="number"
                id="input-estrazione-giocatore"
                name="randomPlayerNum"
                value={inputField.randomPlayerNum}
                onChange={handleChange}
                label="A chi toccherà oggi?"
                className="text-center text-3xl p-2"
            >
                <div className="absolute w-full text-xs text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary">
                    Inserisci un numero: 11 per i soli titolari, 18 per
                    comprendere la panchina
                </div>
            </TEInput>
            <TERipple rippleColor="light">
                <button
                    type="button"
                    onClick={genSecondRandomNumber}
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                    Estrai
                </button>
            </TERipple>
            <div className="p-12 rounded bg-no-repeat bg-contain bg-center overflow-hidden flex items-center justify-center "
            style={{backgroundImage: `url(${teamKits[randomJersey-1]})`}}>
                {secondExtractedNumber && <span
                style={randomJersey === 2 ? {color: "var(--clr-sec"} : {}} className="pt-4 pb-2 font-['Oswald'] text-gray-300 text-5xl font-bold relative bottom-0 block">{secondExtractedNumber}</span>}
            </div>
        </section>
    );
};

export default SecondaEstrazione;
