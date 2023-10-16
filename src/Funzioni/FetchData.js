import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import datiBackupIC from "../Data/datiBackupIC";
import { randomNumber } from "../Funzioni/RandomNumber";
import SecondaEstrazione from "../Components/SecondaEstrazione";

export default function FetchData(props) {
  const { changeModalState } = props;

  const [casuale, setCasuale] = useState(null);

  const estraiNumeroCasuale = () => {
    setCasuale(randomNumber(datiBackupIC));
  };

  const { id, title, name } = casuale ? datiBackupIC[casuale - 1] : {};

  useEffect(() => {
    estraiNumeroCasuale();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 1,
        type: "spring",
        // stiffness: 200,
      }}
      className="flex h-full w-full flex-col items-center justify-start gap-16 overflow-y-auto rounded-xl p-1 shadow-lg ring ring-inset ring-white/75 md:gap-8 md:p-4"
    >
      <motion.div
        className="cursor-pointer self-end"
        whileHover={{
          scale: 1.2,
          rotate: 90,
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <MdClose
          size={"3rem"}
          onClick={changeModalState}
          className=" fill-gray-300 hover:fill-[--clr-sec]"
        />
      </motion.div>
      <h3
        style={{
          filter: "drop-shadow(.05rem .05rem 0.2rem #000)",
        }}
        className="w-fit p-2 text-center text-lg uppercase italic text-gray-300 md:p-8 md:text-3xl"
      >
        {title}
      </h3>
      <h4
        style={{
          filter: "drop-shadow(.05rem .05rem 0.2rem #000)",
        }}
        className="text-md w-fit p-2 text-center uppercase italic text-gray-300 md:p-8 md:text-xl"
      >
        {name}
      </h4>
      {(id === 6 || id === 2) && <SecondaEstrazione />}
    </motion.div>
  );
}
