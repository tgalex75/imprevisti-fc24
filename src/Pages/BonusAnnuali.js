import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const BonusAnnuali = () => {
  const inputRef = useRef(null);

  const [vociBonus, setVociBonus] = useState(
    localStorage.getItem("vociBonus")
      ? JSON.parse(localStorage.getItem("vociBonus"))
      : [],
  );

  const limiteRaggiunto = vociBonus.length > 2;

  useEffect(() => {
    localStorage.setItem("vociBonus", JSON.stringify(vociBonus));
  }, [vociBonus]);

  useEffect(() => {
    const vociBonus = localStorage.getItem("vociBonus");
    if (vociBonus) {
      setVociBonus(JSON.parse(vociBonus));
    }
  }, []);

  const addVociBonus = (element) => {
    setVociBonus([...vociBonus, { ...element }]);
  };

  const azzeraVociBonus = () => {
    setVociBonus([]);
  };

  return (
    <section className="flex h-full w-full select-none flex-col items-center justify-around gap-6 px-4 pb-12 font-bold md:justify-around md:pb-12">
      <h1>Bonus Imprevisti</h1>
      <div className="flex h-[80vh] w-full select-none flex-col items-center justify-around gap-8 rounded-xl border-4 border-[--clr-sec] bg-black/50 px-4 md:px-12 p-4 md:py-8 shadow-lg ring ring-inset ring-white/75 md:min-h-[60vh] md:w-3/4 md:border-8">
        <div className="flex w-full items-center justify-around md:w-3/4">
          <div className="flex w-full h-18 flex-col items-center text-center md:w-3/4">
            <label
              htmlFor="numero-episodio"
              className="mb-1 inline-block text-sm text-gray-300"
            >
              Inserisci il numero dell'episodio durante il quale hai speso il
              bonus
            </label>
            <div
              style={
                limiteRaggiunto ? { pointerEvents: "none", opacity: 0.4 } : {}
              }
              className="flex w-full h-full items-center justify-between gap-2 md:w-4/5"
            >
              <input
                ref={inputRef}
                type="number"
                id="nome-giocatore"
                className="w-1/2 h-10 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-2 py-2 text-sm text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                name="nomeGiocatore"
                placeholder="Episodio n. ?"
              />
              <button
                type="button"
                className="w-1/2 h-10 rounded-lg bg-sky-700 px-2 py-2 text-center text-sm font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
                onClick={() =>
                  addVociBonus({
                    id: vociBonus.length + 1,
                    episodio: inputRef.current.value,
                  })
                }
              >
                Aggiungi alla Lista
              </button>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full md:w-3/4 flex-col justify-around gap-4 overflow-y-auto border-2 border-gray-300/20 p-4">
          {Object.entries(vociBonus).map((item, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4, type: "spring" }}
              className="flex items-center rounded-lg md:py-4 justify-center gap-14 bg-orange-600 py-1"
              key={index}
            >
              <div className="flex items-center text-center gap-6 md:gap-14">
                <h2 className="mx-2 text-md md:text-lg font-bold uppercase">
                  Bonus n.{index + 1}
                </h2>
                <h2 className="mx-2 text-md md:text-lg font-bold uppercase">
                  Utilizzato durante l'episodio n. {item.episodio}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>
        <button
          type="button"
          className="flex-1 rounded-lg bg-green-900 px-4 py-2 text-center text-sm font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2  focus:ring-offset-indigo-200 "
          onClick={azzeraVociBonus}
        >
          Azzera la Lista
        </button>
      </div>
    </section>
  );
};

export default BonusAnnuali;
