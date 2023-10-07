import React, { useState } from "react";
import FetchData from "../Funzioni/FetchData";
import logoSfondo from "../assets/imgs/falco_nocornice.png";
import {motion} from "framer-motion"


const ImprevistoCommunity = (props) => {
  const [showModal, setShowModal] = useState(true);

  const changeModalState = () => {
    setShowModal((prevModal) => !prevModal);
  };

  return (
    showModal && (
      <motion.section

      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{ delay: 0.3, duration: .2, type: "spring"}}

        style={{
          backgroundPositionX: "-30%",
          backgroundPositionY: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${logoSfondo})`,
        }}
        className="absolute left-1/2 top-1/2 z-[900] flex h-[75vh] w-[85vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-32 rounded-xl border-8 border-[--clr-sec] bg-gray-800 p-12 uppercase text-[--clr-prim] shadow-xl ring ring-inset ring-white/75"
      >
        <h3
          style={{
            fontFamily: "'Gochi Hand', cursive",
            filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
          }}
          className="text-5xl"
        >
          Imprevisto della Community{" "}
        </h3>
        <FetchData changeModalState={changeModalState} />
      </motion.section>
    )
  );
};

export default ImprevistoCommunity;
