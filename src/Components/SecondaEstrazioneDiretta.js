import firstkit from "../assets/imgs/firstKit.png";
import gkKit from "../assets/imgs/gkKit.png";
import pickRandom from "pick-random";
import { data } from "../Funzioni/schemi";
import IndicatoreGiocatoriImpr from "./IndicatoreGiocatoriImpr";
import { isMobile } from "react-device-detect";

const SecondaEstrazioneDiretta = (props) => {
  const { extractedPl } = props;

  const numbers = data.map((player) => player.nome);
  const extractedPlayer = pickRandom(numbers, { count: extractedPl });

  return (
    <section
      id="secEstrDiretta"
      className="flex h-fit w-full flex-col items-center justify-around rounded-md border-2 border-gray-300/20 px-1 md:min-h-[50%] md:px-6"
    >
      <h4 className="my-1 text-xs font-bold uppercase text-gray-300 md:my-0 md:mb-1 md:text-lg">
        I giocatori estratti sono i numeri:
      </h4>
      <main
        id="mainSecEstrDiretta"
        className="flex h-full w-full items-center justify-between gap-2"
      >
        <div
          id="extractedPlayers"
          className="flex h-full md:w-3/4 flex-wrap items-center justify-around md:self-start rounded-lg md:flex-nowrap md:gap-4"
        >
          {extractedPlayer.map((player, idx) => {
            return (
              <div
                key={"playerNumber." + idx}
                className="flex flex-col items-center justify-center overflow-hidden rounded bg-contain bg-center bg-no-repeat p-8 transition-all md:h-full md:w-full"
                style={{
                  backgroundImage:
                    player === 1 ? `url(${gkKit})` : `url(${firstkit})`,
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
          <IndicatoreGiocatoriImpr extractedPlayer={extractedPlayer} />
        )}
      </main>
    </section>
  );
};

export default SecondaEstrazioneDiretta;
