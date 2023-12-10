import firstkit from "../assets/imgs/firstKit.png";
import gkKit from "../assets/imgs/gkKit.png";
import pickRandom from "pick-random";
import { data } from "../Funzioni/schemi";

const SecondaEstrazioneDiretta = (props) => {
  const { numbExtrPlayer } = props;

  const numbers = data.map((player) => player.id);
  const extractedPlayer = pickRandom(numbers, { count: numbExtrPlayer });

  return (
    <section className="flex flex-col h-[40vh] w-full items-center justify-around rounded-md border-2 border-gray-300/20 px-1 md:min-h-[35vh] md:px-12">
        <h4 className="uppercase text-gray-300 text-xs md:text-xl my-2 md:my-4 font-bold">I giocatori estratti sono i numeri:</h4>
      <div className="flex h-full w-full flex-wrap items-center justify-around rounded-lg px-2 md:flex-nowrap md:gap-6">
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
    </section>
  );
};

export default SecondaEstrazioneDiretta;
