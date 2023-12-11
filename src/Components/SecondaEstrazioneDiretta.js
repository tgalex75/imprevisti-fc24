import firstkit from "../assets/imgs/firstKit.png";
import gkKit from "../assets/imgs/gkKit.png";
import pickRandom from "pick-random";
import { data } from "../Funzioni/schemi";
import IndicatoreGiocatoriImpr from "./IndicatoreGiocatoriImpr";

const SecondaEstrazioneDiretta = (props) => {
  const { numbExtrPlayer } = props;

  const numbers = data.map((player) => player.id);
  const extractedPlayer = pickRandom(numbers, { count: numbExtrPlayer });

  console.log(extractedPlayer);

  return (
    <section className="flex h-[40vh] w-full flex-col items-center justify-around rounded-md border-2 border-gray-300/20 px-1 md:min-h-[35vh] md:px-12">
      <h4 className="my-2 text-xs font-bold uppercase text-gray-300 md:my-4 md:text-xl">
        I giocatori estratti sono i numeri:
      </h4>
      <main className="flex h-full w-full justify-between items-center">
        <div className="flex h-full w-3/5 flex-wrap items-center justify-around self-start rounded-lg px-2 md:flex-nowrap md:gap-6">
          {extractedPlayer.map((player, i) => {
            return (
              <div
                key={i}
                className="flex w-1/3 flex-col items-center justify-center overflow-hidden rounded bg-contain bg-center bg-no-repeat p-8 transition-all md:h-full md:w-full"
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
        <IndicatoreGiocatoriImpr extractedPlayer={extractedPlayer} />
      </main>
    </section>
  );
};

export default SecondaEstrazioneDiretta;
