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
        stiffness: 200,
      }}
      className="mx-auto my-6 flex h-full w-full items-center justify-center rounded-xl border-8 border-[--clr-prim] p-2 shadow-lg ring ring-inset ring-white/75"
    >
      <h3
        style={{
          fontFamily: "'Handlee', cursive",
          filter: "drop-shadow(.05rem .05rem 0.2rem #000)",
        }}
        className="my-8 w-fit p-8 text-center text-4xl uppercase italic text-gray-300"
      >
        {name}
      </h3>
      <motion.div
        className="absolute right-0 top-0 m-4 cursor-pointer"
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
    </motion.div>
  );
}
