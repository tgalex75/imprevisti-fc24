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
        className="absolute left-1/2 top-1/2 z-[1000] flex h-screen w-screen -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-around gap-2 rounded-xl bg-gray-800 p-4 py-8 uppercase text-[--clr-prim] shadow-xl md:p-16"
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
