import React from "react";
import { motion } from "framer-motion";
import { MdClear } from "react-icons/md";

const RegistroRinnovi = (props) => {
  const { vociRegistro, deleteListDB, removeVociRegistro } = props;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.7 }}
      className="absolute bottom-1 left-1 top-1 hidden h-[98%] w-[18vw] items-center gap-2 overflow-hidden rounded-lg bg-black/50 text-gray-300 md:flex md:flex-col"
    >
      <h6 className="uppercase text-yellow-600">Registro Giocatori</h6>
      <ul className="flex h-full w-full flex-col gap-1 overflow-y-auto px-2 pb-2">
        {vociRegistro.map((el) => (
          <li
            key={el.id}
            className="flex items-center justify-between bg-gray-700/20 ps-1 text-left text-[0.6rem] uppercase"
          >
            {el.name} - {el.description} - {el.tipo}
            <MdClear
              size={18}
              className="cursor-pointer fill-red-700 transition-all hover:scale-125 hover:fill-red-600"
              onClick={() => removeVociRegistro(el.id)}
            />
          </li>
        ))}
      </ul>
      <button
        className="block h-8 w-full bg-[--clr-prim]"
        onClick={deleteListDB}
      >
        Resetta lista
      </button>
    </motion.div>
  );
};

export default RegistroRinnovi;
