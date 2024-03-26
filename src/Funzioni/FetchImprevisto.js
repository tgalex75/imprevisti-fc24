import { useContext } from "react";
import { CartContext } from "../context/regContext";
import random from "random";
import SecondaEstrazione from "../Components/SecondaEstrazione";

export default function FetchData() {
  const { speciali } = useContext(CartContext);

  const casuale = random.choice(speciali);

  const { titolo, descrizione } = casuale;

  console.table(casuale);

  return (
    <>
      <section id="FetchImprevisto" className="flex flex-col gap-8 md:h-full">
        <h4 className="text-2xl font-extrabold uppercase md:text-5xl">
          {titolo}
        </h4>
        <p
          style={{ fontFamily: "'Handlee', cursive" }}
          className={`h-fit flex-1 overflow-y-auto px-4 ${
            descrizione && descrizione.length > 200
              ? "text-sm md:text-xl"
              : "text-xl md:text-3xl"
          }`}
        >
          {descrizione}
        </p>
      </section>
      <SecondaEstrazione />
    </>
  );
}
