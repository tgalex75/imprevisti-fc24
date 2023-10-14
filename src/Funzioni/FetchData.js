import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import datiBackupIC from "../Data/datiBackupIC";
import { randomNumber } from "../Funzioni/RandomNumber";

export default function FetchData(props) {
  const { changeModalState } = props;

  const [casuale, setCasuale] = useState(null);

  const estraiNumeroCasuale = () => {
    setCasuale(randomNumber(datiBackupIC));
  };

  const { name } = casuale ? datiBackupIC[casuale - 1] : {};

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
      className="flex h-full w-full flex-col items-center justify-start gap-16 rounded-xl p-1 md:p-4 shadow-lg ring ring-inset overflow-y-auto ring-white/75"
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
          fontFamily: "'Handlee', cursive",
          filter: "drop-shadow(.05rem .05rem 0.2rem #000)",
        }}
        className="w-fit p-2 text-center text-md uppercase italic text-gray-300 md:p-8 md:text-4xl"
      >
        {name}
      </h3>
    </motion.div>
  );
}
