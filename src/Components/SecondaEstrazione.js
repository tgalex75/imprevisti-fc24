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
      Math.floor(Math.random() * inputField.randomPlayerNum) + 1,
    );
    setRandomJersey(Math.floor(Math.random() * 3) + 1);
  };

  return (
    <section className="flex h-[35vh] md:min-h-[30vh] w-full md:w-3/4 items-center justify-around rounded-md border-2 gap-2 border-gray-300/20 px-1 md:px-12">
      <div className="flex h-full flex-col items-center justify-around rounded-lg px-2">
        <div className="flex flex-col w-full items-center justify-around">
          <label
            htmlFor="name-with-label"
            className="mb-1 self-start text-xs md:text-sm text-gray-300"
          >
            A chi toccherà oggi?
          </label>
          <input
            onChange={handleChange}
            value={inputField.randomPlayerNum}
            type="number"
            id="input-estrazione-giocatore"
            className="min-h-[2rem] md:min-h-[3rem] w-full flex-1 appearance-none rounded-lg border-gray-300 bg-white px-4 text-sm md:text-md text-gray-800 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-4 focus:ring-sky-700 "
            name="randomPlayerNum"
            placeholder="Quanti giocatori?"
          />
        </div>
        <button
          type="button"
          onClick={genSecondRandomNumber}
          className="min-h-[2rem] md:h-12 w-full rounded-lg bg-sky-700 px-4 text-center text-sm font-semibold text-gray-100 shadow-md transition duration-200 ease-in hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-[--clr-ter] focus:ring-offset-2  focus:ring-offset-sky-800 "
        >
          Estrai
        </button>
      </div>
      {secondExtractedNumber && (
        <div
          className="flex h-full w-1/2 flex-col items-center justify-center overflow-hidden rounded bg-contain bg-center bg-no-repeat p-6 transition-all"
          style={{
            backgroundImage: `url(${teamKits[randomJersey - 1]})`,
          }}
        >
          <span
            style={randomJersey === 2 ? { color: "var(--clr-sec" } : {}}
            className="block pt-2 font-['Oswald'] text-4xl md:text-7xl font-bold text-gray-300"
          >
            {secondExtractedNumber}
          </span>
        </div>
      )}
    </section>
  );
};

export default SecondaEstrazione;
