import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "../supabaseClient";

const BonusAnnuali = () => {
  const inputRef = useRef(null);

  const [vociBonus, setVociBonus] = useState([]);

  const limiteRaggiunto = vociBonus.length > 2;

  useEffect(() => {
    fetchLista();
  }, []);

  const fetchLista = async () => {
    const { data } = await supabase.from("bonus-imprevisti").select("*");
    setVociBonus(data ? data : {});
  };

  const uploadListDB = async (list) => {
    const { data, error } = await supabase
      .from("bonus-imprevisti")
      .insert([{ id: list.id, episodio: list.episodio }])
      .select();
    console.log("data: ", data);
    console.log("error: ", error);
  };

  const deleteListDB = async () => {
    const { error } = await supabase
      .from("bonus-imprevisti")
      .delete("id")
      .lt("id", 4);
      console.log(error)
  };

  console.log(vociBonus);

  const addVociBonus = (element) => {
    setVociBonus([...vociBonus, { ...element }]);
    uploadListDB(element);
    fetchLista();
  };

  const azzeraVociBonus = () => {
    setVociBonus([]);
    deleteListDB();
  };

  return (
    <section className="flex min-h-[75vh] w-full flex-col items-center justify-around gap-12 py-4 font-bold">
      <h1>Bonus Imprevisti</h1>
      <div className="flex min-h-[50vh] w-3/4 select-none flex-col items-center justify-around gap-4 rounded-xl border-8 border-[--clr-sec] bg-black/50 px-12 py-8 shadow-lg ring ring-inset ring-white/75">
        <div className="flex w-3/4 justify-around">
          <div className="w-1/2">
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
              className="flex items-center justify-between gap-2"
            >
              <input
                ref={inputRef}
                type="number"
                id="nome-giocatore"
                className="w-1/2 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-sm text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                name="nomeGiocatore"
                placeholder="Episodio n. ?"
              />
              <button
                type="button"
                className="flex-1 rounded-lg bg-sky-700 px-4 py-2 text-center text-sm font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
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
        <div className="flex min-h-[30vh] w-3/4 flex-col justify-around gap-4 overflow-y-auto border-2 border-gray-300/20 p-4">
          {vociBonus.map((item, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4, type: "spring" }}
              className="flex items-center justify-center gap-14 bg-orange-600 py-1"
              key={index}
            >
              <div className="flex gap-4">
                <h2 className="mx-2 text-lg font-bold uppercase">
                  Bonus n.{index + 1}
                </h2>
              </div>
              <div className="flex items-center gap-4 pr-2">
                <h2 className="mx-2 text-lg font-bold uppercase">
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
