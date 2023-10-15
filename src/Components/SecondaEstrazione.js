import React, { useState } from "react";
import firstkit from "../assets/imgs/first_kit_back.png";
import awaykit from "../assets/imgs/away_kit_back.png";
import thirdkit from "../assets/imgs/third_kit_back.png";
import gkkit from "../assets/imgs/gk_kit_back.png";

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

  const teamKits = [firstkit, awaykit, thirdkit, gkkit];

  const genSecondRandomNumber = () => {
    setSecondExtractedNumber(
      Math.floor(Math.random() * inputField.randomPlayerNum) + 1,
    );
    setRandomJersey(Math.floor(Math.random() * 3) + 1);
  };

  return (
    <section className="flex min-h-[20vh] w-full items-center justify-center gap-4 rounded-md border-2 border-gray-300/20 px-4 py-2 md:w-3/4 md:gap-12 md:px-12">
      <div className="flex h-full flex-col items-center justify-around gap-4 rounded-lg">
        <div className="flex flex-col items-center justify-around">
          <label
            htmlFor="name-with-label"
            className="mb-1 self-start text-gray-300"
          >
            A chi toccherà oggi?
          </label>
          <input
            onChange={handleChange}
            value={inputField.randomPlayerNum}
            type="number"
            id="input-estrazione-giocatore"
            className="min-h-[3rem] w-full flex-1 appearance-none rounded-lg border-gray-300 border-transparent bg-white px-4 py-2 text-lg text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-4 focus:ring-sky-700 "
            name="randomPlayerNum"
            placeholder="11 o 18 giocatori?"
          />
        </div>
        <button
          type="button"
          onClick={genSecondRandomNumber}
          className="min-h-[3rem] w-full rounded-lg bg-[--clr-sec] px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-[--clr-prim] focus:outline-none focus:ring-2 focus:ring-[--clr-prim] focus:ring-offset-2  focus:ring-offset-green-200 "
        >
          Estrai
        </button>
      </div>
      {secondExtractedNumber && (
        <div
          className="flex h-full w-1/3 flex-col items-center overflow-hidden rounded bg-contain bg-center bg-no-repeat p-12 transition-all"
          style={
            secondExtractedNumber === 1
              ? {
                  backgroundImage: `url(${teamKits[3]})`,
                }
              : {
                  backgroundImage: `url(${teamKits[randomJersey - 1]})`,
                }
          }
        >
          <span
            style={randomJersey === 2 ? { color: "var(--clr-sec" } : {}}
            className="mt-6 block font-['Oswald'] text-5xl font-bold text-gray-300 md:mt-8 md:text-7xl"
          >
            {secondExtractedNumber}
          </span>
        </div>
      )}
    </section>
  );
};

export default SecondaEstrazione;
