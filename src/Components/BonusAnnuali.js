import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BonusAnnuali = () => {
  const [vociBonus, setVociBonus] = useState(() => {
    const saved = localStorage.getItem("vociBonus");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const limiteRaggiunto = vociBonus.length > 2;

  useEffect(() => {
    localStorage.setItem("vociBonus", JSON.stringify(vociBonus));
  }, [vociBonus]);

  const addVociBonus = (element) => {
    setVociBonus([...vociBonus, { ...element }]);
  };

  const azzeraVociBonus = () => {
    setVociBonus([]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.7 }}
      className="absolute top-36 mt-2 right-1 hidden h-2/5 w-[20vw] items-center justify-between overflow-hidden rounded-lg bg-black/50 p-2 uppercase text-gray-300 md:flex md:flex-col"
    >
      <h6 className="font-bold uppercase text-[--clr-prim]">
        Bonus Annuali
      </h6>
      <section className=" flex w-full items-center justify-around gap-1 p-1">
          {vociBonus.map((item) => (
            <motion.div
              //layout
              initial={{ opacity: 0, y: -1000 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 1000 }}
              transition={{ duration: 0.7, type: "spring" }}
              className="flex h-full w-1/3 items-center justify-center rounded py-1"
              key={item.id}
            >
              <div className="flex min-h-full w-full flex-col items-center justify-center rounded-t-lg bg-orange-600/95 text-center">
                <h6 className="text-[.6rem]">Bonus</h6>
                <h3 className="mx-2 text-sm font-bold uppercase md:text-sm">
                  {item.id}
                </h3>
              </div>
            </motion.div>
          ))}
      </section>
      <div className="flex h-1/6 w-full font-semibold items-center justify-between gap-2 px-4 text-[.8rem]">
        <button
          type="button"
          className="h-5/6 w-full rounded border border-sky-700 px-3  text-center text-white shadow-md transition duration-200 ease-in hover:bg-sky-700 flex items-center justify-center"
          style={limiteRaggiunto ? { pointerEvents: "none", opacity: 0.3 } : {}}
          onClick={() =>
            addVociBonus({
              id: vociBonus.length + 1,
            })
          }
        >
          Aggiungi Bonus
        </button>
        <button
          type="button"
          className="h-5/6 w-full rounded border border-[--clr-prim] px-3  text-center text-white shadow-md transition duration-200 ease-in hover:bg-[--clr-prim] flex items-center justify-center"
          onClick={azzeraVociBonus}
        >
          Azzera
        </button>
      </div>
    </motion.div>
  );
};

export default BonusAnnuali;
