import React, { useState, useRef } from "react";
import firstkit from "../assets/imgs/firstKit.png";
import awaykit from "../assets/imgs/awayKit.png";
import thirdkit from "../assets/imgs/thirdKit.png";
import gkKit from "../assets/imgs/gkKit.png";
import IndicatoreGiocatoriImpr from "./IndicatoreGiocatoriImpr";
import { isMobile } from "react-device-detect";
import random from "random";
import pickRandom from "pick-random";
import { numberArrayFromRange } from "number-array-from-range";

const SecondaEstrazione = () => {
  const [inputFieldRosa, setInputFieldRosa] = useState(null);
  const [inputFieldEstratti, setInputFieldEstratti] = useState(null);
  const refEstratti = useRef(null);
  const refRosa = useRef(null);

  const handleRefEstratti = () => {
    setInputFieldEstratti(
      parseInt(refEstratti.current.value) <= 10
        ? parseInt(refEstratti.current.value)
        : 10,
    );
  };

  const handleRefRosa = () => {
    setInputFieldRosa(parseInt(refRosa.current.value));
  };

  const [secondExtractedNumber, setSecondExtractedNumber] = useState(null);

  const [randomJersey, setRandomJersey] = useState(null);

  const teamKits = [firstkit, awaykit, thirdkit];

  const genSecondRandomNumber = () => {
    const playersArray = numberArrayFromRange(1, inputFieldRosa);
    setSecondExtractedNumber(
      pickRandom(playersArray, { count: inputFieldEstratti }),
    );
    setRandomJersey(random.choice(teamKits));
  };

  return (
    <section className="md:4/5 flex h-[40vh] w-full items-center justify-around gap-2 rounded-md border-2 border-gray-300/20 px-1 md:min-h-[50%] md:px-12">
      <div className="absolute right-12 top-44 flex h-fit flex-col items-center justify-around gap-6 rounded-lg px-2">
        <div className="flex w-full flex-col items-center justify-around gap-2">
          <label
            htmlFor="name-with-label"
            className="self-start text-xs text-gray-300 md:text-sm"
          >
            A chi toccherà oggi?
          </label>
          <input
            onChange={handleRefEstratti}
            ref={refEstratti}
            type="number"
            id="input-giocatori-estratti"
            className="md:text-md min-h-[2rem] w-full flex-1 appearance-none rounded-lg border-gray-300 bg-white px-4 text-sm text-gray-800 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-4 focus:ring-sky-700 md:min-h-[3rem] "
            name="randomPlayerNum"
            placeholder="Quanti estratti? (max 10)"
          />
          <input
            onChange={handleRefRosa}
            ref={refRosa}
            type="number"
            id="rosa-quanti-giocatori"
            className="md:text-md min-h-[2rem] w-full flex-1 appearance-none rounded-lg border-gray-300 bg-white px-4 text-sm text-gray-800 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-4 focus:ring-sky-700 md:min-h-[3rem] "
            name="randomPlayerNum"
            placeholder="Su quanti giocatori?"
          />
        </div>
        <button
          type="button"
          onClick={genSecondRandomNumber}
          className="min-h-[2rem] w-full rounded-lg bg-sky-700 px-4 text-center text-sm font-semibold text-gray-100 shadow-md transition duration-200 ease-in hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-[--clr-ter] focus:ring-offset-2 focus:ring-offset-sky-800 md:h-12 "
        >
          Estrai
        </button>
      </div>
      {secondExtractedNumber && (
        <>
          <div
            id="extractedPlayers"
            className="flex h-full flex-wrap items-center justify-around rounded-lg md:w-full md:self-start"
          >
            {secondExtractedNumber.map((player, idx) => {
              return (
                <div
                  key={"playerNumber." + idx}
                  className="flex w-1/5 items-center justify-center overflow-hidden rounded bg-contain bg-center bg-no-repeat transition-all"
                  style={{
                    backgroundImage:
                      player === 1 ? `url(${gkKit})` : `url(${randomJersey})`,
                    height: inputFieldEstratti > 5 ? "50%" : "100%",
                  }}
                >
                  <span
                    className="block pt-2 font-['Oswald'] text-4xl font-bold text-gray-300 md:text-7xl"
                    style={{
                      color:
                        (randomJersey === awaykit) && "darkslategray",
                    }}
                  >
                    {player}
                  </span>
                </div>
              );
            })}
          </div>
          {!isMobile && (
            <IndicatoreGiocatoriImpr extractedPlayer={secondExtractedNumber} />
          )}
        </>
      )}
    </section>
  );
};

export default SecondaEstrazione;
