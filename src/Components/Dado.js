import React from "react";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import {motion} from 'framer-motion'

const Dado = (clickFunc) => {
  return (
    <motion.div
    whileHover={{
      scale: 1.2,
      rotate: 45,
      }}
      whileTap={{
        rotate: -45
      }}
      transition={{type: "spring", stiffness: 300 }}
    className="absolute bottom-16 right-48 flex h-auto cursor-pointer items-center justify-center rounded-full p-2 hover:bg-gray-500/10">
      <GiPerspectiveDiceSixFacesRandom
        /* ==> framer-motion */
        style={{
          filter: "drop-shadow(.25rem .25rem 0.15rem #222)",
        }}
        size={"8rem"}
        onClick={clickFunc}
      />
    </motion.div>
  );
};

export default Dado;
