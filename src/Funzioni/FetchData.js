import { useState, useEffect } from "react";
import datiBackupIC from "../Data/datiBackupIC";
import { randomNumber } from "../Funzioni/RandomNumber";

export default function FetchData() {

  const [casuale, setCasuale] = useState(null);

  const estraiNumeroCasuale = () => {
    setCasuale(randomNumber(datiBackupIC));
  };

  const { name } = casuale ? datiBackupIC[casuale - 1] : {};

  useEffect(() => {
    estraiNumeroCasuale();
  }, []);

  return (
    <p
      
      className={`h-fit flex-1 overflow-y-auto px-4 italic ${
        name && name.length > 200 ? "text-sm md:text-xl" : "text-xl md:text-3xl"
      }`}
    >
      {name}

    </p>
  );
}
