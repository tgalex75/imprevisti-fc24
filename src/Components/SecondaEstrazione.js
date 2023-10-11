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
    <section className="flex min-h-[20vh] w-3/4 items-center justify-around rounded-md border-2 border-gray-300/20 px-12 py-2">
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
          style={{
            backgroundImage: `url(${teamKits[randomJersey - 1]})`,
          }}
        >
          <span
            style={randomJersey === 2 ? { color: "var(--clr-sec" } : {}}
            className="block pt-5 font-['Oswald'] text-6xl font-bold text-gray-300"
          >
            {secondExtractedNumber}
          </span>
        </div>
      )}
    </section>
  );
};

export default SecondaEstrazione;
