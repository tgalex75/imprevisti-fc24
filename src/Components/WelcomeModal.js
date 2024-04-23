import { MdInfoOutline } from "react-icons/md";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WelcomeModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    let returningUser = localStorage.getItem("avvisoModale");
    setIsModalOpen(!returningUser);
  }, []);

  const chiudiModale = () => {
    localStorage.setItem("avvisoModale", true);
    setIsModalOpen(false);
  };

  return (
    isModalOpen && (
      <>
        <motion.div
          className="fixed left-1/2 top-1/2 z-[1001] flex h-4/5 w-4/5 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-6 rounded-xl border-8 border-[--clr-ter] bg-[--clr-sec]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeOut",
            delay: 0.5,
            duration: 0.7,
            type: "spring",
          }}
        >
          <MdInfoOutline size={56} />
          <h2 className="bold font-H2 text-3xl md:text-6xl">Avviso</h2>
          <p className="font-Descr w-4/5 text-center text-xl md:w-2/3 md:text-2xl">
            Disponibile una nuova versione personalizzabile della WEB APP:<br/>
            <a className="block uppercase font-bold text-base md:text-lg my-2" href="https://imprevisti-diy.netlify.app/" rel="noreferrer" target="_blank">clicca qui</a>
          </p>
          <button
            className="w-3/4 rounded-lg bg-[--clr-ter] px-4 py-2 text-xl font-semibold md:w-1/3"
            onClick={chiudiModale}
          >
            Ok... ho capito!
          </button>
        </motion.div>
      </>
    )
  );
};

export default WelcomeModal;
