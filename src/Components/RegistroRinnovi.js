import React from "react";
import { motion } from "framer-motion";

const RegistroRinnovi = (props) => {
  const { vociRegistro, azzeraVociRegistro } = props;
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className="absolute items-center top-1 bottom-1 left-1 hidden h-[98%] w-[15vw] overflow-hidden rounded-lg bg-black/50 text-gray-300 md:flex md:flex-col"
    >
      <h6 className="uppercase">Registro Rinnovi</h6>
      <ul className="flex h-full w-full flex-col gap-1 overflow-y-auto px-2 pb-2">
        {vociRegistro.map((el) => (
          <li
            key={el.id}
            className="bg-gray-700/20 ps-1 text-left text-[.6rem] uppercase"
          >
            {el.name}
          </li>
        ))}
      </ul>
      <button
        className="block h-8 w-full bg-[--clr-prim]"
        onClick={azzeraVociRegistro}
      >
        Resetta lista
      </button>
    </motion.div>
  );
};

export default RegistroRinnovi;
