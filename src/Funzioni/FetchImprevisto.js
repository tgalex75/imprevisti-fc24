import { useState, useContext } from "react";
import { CartContext } from "../context/regContext";
import random from "random";

export default function FetchData() {
  const {speciali} = useContext(CartContext)

  const casuale = random.choice(speciali)
  return (
    <section id="FetchImprevisto" className="flex md:h-full flex-col gap-8">
      <h4 className="text-2xl uppercase md:text-5xl font-extrabold">{casuale.titolo}</h4>
      <p
        style={{ fontFamily: "'Handlee', cursive" }}
        className={`h-fit flex-1 overflow-y-auto px-4 ${
          casuale.descrizione && casuale.descrizione.length > 200
            ? "text-sm md:text-xl"
            : "text-xl md:text-3xl"
        }`}
      >
        {casuale.descrizione}
      </p>
    </section>
  );
}
