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

const SecondaEstrazione = (props) => {
  const { extractedPl } = props;

  const [inputFieldRosa, setInputFieldRosa] = useState(null);
  const [inputFieldEstratti, setInputFieldEstratti] = useState(null);
  const refEstratti = useRef(null);
  const refRosa = useRef(null);

  const handleRefEstratti = () => {
    setInputFieldEstratti(parseInt(refEstratti.current.value));
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
    setRandomJersey(random.int(1, 3));
  };

  console.log(secondExtractedNumber)

  return (
    <section className="flex h-[40vh] w-full items-center justify-around gap-2 rounded-md border-2 border-gray-300/20 px-1 md:min-h-[50%] md:w-3/4 md:px-12">
      <div className="flex h-fit flex-col items-center justify-around gap-6 rounded-lg px-2">
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
            defaultValue={1}
            type="number"
            id="input-giocatori-estratti"
            className="md:text-md min-h-[2rem] w-full flex-1 appearance-none rounded-lg border-gray-300 bg-white px-4 text-sm text-gray-800 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-4 focus:ring-sky-700 md:min-h-[3rem] "
            name="randomPlayerNum"
            placeholder="Quanti estratti?"
          />
          <input
            onChange={handleRefRosa}
            ref={refRosa}
            defaultValue={11}
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
          className="flex h-full md:w-3/4 flex-wrap items-center justify-around md:self-start rounded-lg md:flex-nowrap md:gap-4"
        >
          {secondExtractedNumber.map((player, idx) => {
            return (
              <div
                key={"playerNumber." + idx}
                className="flex flex-wrap flex-col items-center justify-center overflow-hidden rounded bg-contain bg-center bg-no-repeat p-8 transition-all md:h-full"
                style={{
                  backgroundImage:
                    player === 1 ? `url(${gkKit})` : `url(${randomJersey})`,
                }}
              >
                <span className="block pt-2 font-['Oswald'] text-4xl font-bold text-gray-300 md:text-7xl">
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
