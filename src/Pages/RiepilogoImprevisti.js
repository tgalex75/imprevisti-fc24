import { useState, useEffect, useRef } from "react";
import { supabase } from "../supabaseClient";
import { motion } from "framer-motion";

const RiepilogoImprevisti = () => {
  const [vociRegistro, setVociRegistro] = useState([]);
  const [selectRefState, setSelectRefState] = useState("prepartita");

  const selectRef = useRef(null);

  const handleSelectRef = () => {
    setSelectRefState(selectRef.current.value);
  };

  useEffect(() => {
    fetchRegistryList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vociRegistro]);

  const fetchRegistryList = async () => {
    const { data } = await supabase
      .from(selectRefState)
      .select("*");
    setVociRegistro(data ? data : []);
  };

  console.log()

  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-12 px-4 pb-6 font-bold">
      <h1>Riepilogo Imprevisti</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="flex h-full w-full items-center gap-2 overflow-hidden rounded-lg bg-black/50 p-2 text-gray-300 md:flex-col"
      >
        <header className="flex w-full items-center justify-between p-1">
          <label
            htmlFor="tipoImprevisto"
            className="flex w-1/3 items-center justify-center gap-2"
          >
            Lista da editare
            <select
              ref={selectRef}
              onChange={handleSelectRef}
              className="w-fit self-center rounded-md border p-1 text-sm font-semibold dark:border-black/20 dark:bg-black/30 dark:text-gray-300 dark:placeholder-black/10 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value="">Seleziona</option>
              <option value="prepartita">Prepartita</option>
              <option value="settimana">Settimana</option>
              <option value="serienegativa">Serie Negativa</option>
              <option value="speciali">Speciali</option>
            </select>
          </label>
          <strong className="w-1/3 text-end font-semibold">
            Numero imprevisti: {vociRegistro.length}
          </strong>
        </header>
        <div className="flex h-full w-full flex-col gap-2">
          <h3 className="text-center uppercase text-[--clr-ter]">
            Imprevisti {selectRefState && selectRefState  }
          </h3>
          <ul className="flex h-full w-full flex-col gap-1 overflow-y-auto px-2 pb-2">
            {vociRegistro.map(
              (el) =>
                el.titolo.toUpperCase() !== "NESSUN IMPREVISTO" && (
                  <li
                    key={el.id}
                    className="flex items-center justify-start gap-8 bg-gray-700/20 py-1 ps-2 text-left text-sm hover:bg-gray-600/50"
                  >
                    <strong className="uppercase">{el.titolo}</strong>
                    <em className="font-medium">{el.descrizione}</em>
                  </li>
                ),
            )}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default RiepilogoImprevisti;
