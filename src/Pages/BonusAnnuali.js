import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "../supabaseClient";

const BonusAnnuali = () => {
  const inputRef = useRef(null);

  const [vociBonus, setVociBonus] = useState([]);

  const limiteRaggiunto = vociBonus.length > 2;

  useEffect(() => {
    fetchLista();
  }, [vociBonus]);

  const fetchLista = async () => {
    const { data } = await supabase.from("bonus-imprevisti").select("*");
    setVociBonus(data ? data : []);
  };

  const uploadListDB = async (list) => {
    const { data, error } = await supabase
      .from("bonus-imprevisti")
      .insert([{ id: list.id, episodio: list.episodio }])
      .select();
    data ? console.log("data: ", data) : console.log("error: ", error);
  };

  const deleteListDB = async () => {
    const { error } = await supabase
      .from("bonus-imprevisti")
      .delete("id")
      .lt("id", 4);
    console.log(error);
  };

  const addVociBonus = (element) => {
    setVociBonus([...vociBonus, { ...element }]);
    uploadListDB(element);
  };

  const azzeraVociBonus = () => {
    setVociBonus([]);
    deleteListDB();
  };

  return (
    <section className="flex h-full w-full select-none flex-col items-center justify-around gap-6 px-4 pb-12 font-bold md:justify-around md:pb-12">
      <h1>Bonus Imprevisti</h1>
      <div className="flex h-[80vh] w-full select-none flex-col items-center justify-around gap-8 rounded-xl border-4 border-[--clr-sec] bg-black/50 p-4 px-4 shadow-lg ring ring-inset ring-white/75 md:min-h-[60vh] md:w-3/4 md:border-8 md:px-12 md:py-8">
        <div className="flex w-full items-center justify-around md:w-3/4">
          <div className="h-18 flex w-full flex-col items-center text-center md:w-3/4">
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
              className="flex h-full w-full items-center justify-between gap-2 md:w-4/5"
            >
              <input
                ref={inputRef}
                type="number"
                id="nome-giocatore"
                className="h-10 w-1/2 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-2 py-2 text-sm text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                name="nomeGiocatore"
                placeholder="Episodio n. ?"
              />
              <button
                type="button"
                className="h-10 w-1/2 rounded-lg bg-sky-700 px-2 py-2 text-center text-sm font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
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
        <div className="flex h-full w-full flex-col justify-around gap-4 overflow-y-auto border-2 border-gray-300/20 p-4 md:w-3/4">
          {vociBonus.map((item, index) => (
            <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
              className="flex items-center justify-center gap-14 rounded-lg bg-orange-600 py-1 md:py-4"
              key={index}
            >
              <div className="flex items-center gap-6 text-center md:gap-14">
                <h2 className="text-md mx-2 font-bold uppercase md:text-lg">
                  Bonus n.{index + 1}
                </h2>
                <h2 className="text-md mx-2 font-bold uppercase md:text-lg">
                  Utilizzato durante l'episodio n. {item.episodio}
                </h2>
              </div>
            </motion.div>
          ))}
n        </div>
        <button
          type="button"
          className="flex-1 rounded-lg bg-yellow-500 px-4 py-2 text-center text-sm font-semibold text-gray-900 shadow-md transition duration-200 ease-in hover:bg-[--clr-ter] focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2  focus:ring-offset-gray-900 "
          onClick={azzeraVociBonus}
        >
          Azzera la Lista
        </button>
      </div>
    </section>
  );
};

export default BonusAnnuali;
