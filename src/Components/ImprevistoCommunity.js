import React, { useState } from "react";
import FetchData from "../Funzioni/FetchData";
import { motion } from "framer-motion";

const ImprevistoCommunity = (props) => {
  const [showModal, setShowModal] = useState(true);

  const changeModalState = () => {
    setShowModal((prevModal) => !prevModal);
  };

  return (
    showModal && (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.2, type: "spring" }}
        className="absolute left-1/2 top-1/2 z-[900] flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-around rounded-xl border-8 border-[--clr-sec] bg-gray-800 md:p-16 py-8 gap-2 p-4 uppercase text-[--clr-prim] shadow-xl ring ring-inset ring-white/75"
      >
        <h3
          style={{
            fontFamily: "'Gochi Hand', cursive",
            filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
          }}
          className="text-3xl md:text-5xl"
        >
          Imprevisto della Community{" "}
        </h3>
        <FetchData changeModalState={changeModalState} />
      </motion.section>
    )
  );
};

export default ImprevistoCommunity;
