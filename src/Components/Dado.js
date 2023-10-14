import React from "react";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { motion } from "framer-motion";

const Dado = (clickFunc) => {
  return (
    <motion.div
      whileHover={{
        rotate: 30,
      }}
      whileTap={{
        rotate: -90,
        scale: 1.2,
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="absolute bottom-0 right-0 m-1 flex h-auto cursor-pointer select-none items-center justify-center rounded-full p-3 hover:bg-gray-500/10 md:m-4"
    >
      <GiPerspectiveDiceSixFacesRandom
        /* ==> framer-motion */
        style={{
          filter: "drop-shadow(.25rem .25rem 0.15rem #222)",
        }}
        size={!isMobile ? "7rem" : "5rem"}
        onClick={clickFunc}
      />
    </motion.div>
  );
};

export default Dado;
