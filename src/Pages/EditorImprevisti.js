import { useState, useRef, useCallback, useContext } from "react";
import { motion } from "framer-motion";
import { MdDeleteForever } from "react-icons/md";
import { MdInfoOutline, MdClear } from "react-icons/md";
import { AddImprevisti } from "../Funzioni/AddImprevisti";
import { CartContext } from "../context/regContext";
import { DelImprevisti } from "../Funzioni/DelImprevisti";

const EditorImprevisti = () => {
  const [selectRefState, setSelectRefState] = useState("prepartita");

  const { [selectRefState]: registro } = useContext(CartContext);

  const selectRef = useRef(null);

  const handleSelectRef = useCallback(() => {
    setSelectRefState(selectRef.current.value);
  }, []);

  return (
    <section className="flex h-full w-full flex-col items-center gap-4 px-4 pb-6 font-bold">
      <h1>Editor Imprevisti</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="flex h-full w-full items-center justify-around overflow-hidden rounded-lg bg-black/50 px-2 text-gray-300 md:flex-col"
      >
        {/* Lista Imprevisti Attuale */}

        <div className="relative flex h-1/2 w-full flex-col items-center justify-center gap-2 p-1">
          <header className="flex w-full items-center justify-between p-1">
            <h3 className="w-1/3 text-start uppercase text-[--clr-ter]">
              Imprevisti {selectRefState}
            </h3>
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
                <option value="prepartita">Prepartita</option>
                <option value="settimana">Settimana</option>
                <option value="serienegativa">Serie Negativa</option>
                <option value="speciali">Speciali</option>
              </select>
            </label>
            <strong className="w-1/3 text-end font-semibold">
              Numero imprevisti: {registro?.length}
            </strong>
          </header>

          {/* Rendered Elements */}

          <ul className="flex h-full w-full flex-col gap-1 overflow-y-auto rounded-lg border p-2">
            <div className="flex min-h-4 items-center justify-between gap-2 bg-gray-700/80 ps-2 text-center text-xs font-bold uppercase italic">
              <span className="h-full w-1/6 border-gray-300/20 bg-transparent p-1">
                Imprevisto S/N
              </span>
              <span className="h-full w-1/6 text-left border-gray-300/20 bg-transparent p-1">
                Titolo
              </span>
              <span className="h-full w-2/6 text-left border-gray-300/20 bg-transparent p-1">
                Descrizione
              </span>
              <span className="h-full w-1/6 border-gray-300/20 bg-transparent p-1">
                Ulteriore Estrazione
              </span>
              <span className="h-full w-1/6 border-gray-300/20 bg-transparent p-1">
                Num. Giocatori Estratti
              </span>
              <MdClear
                  size={24}
                  className="mx-2"
                />
            </div>
            {registro?.map((el) => (
              <li
                key={el.id}
                className="text-md flex text-center min-h-4 items-center justify-between gap-2 bg-gray-700/20 ps-2 font-normal hover:bg-[--clr-prim]"
              >
                <span className="h-full w-1/6 rounded border border-gray-300/20 bg-transparent p-1 font-semibold uppercase">
                  {el.isImprev===1 ? "SI" : "NO"}
                </span>
                <span className="h-full w-1/6 text-start rounded border border-gray-300/20 bg-transparent p-1 font-semibold uppercase">
                  {el.titolo}
                </span>
                <span className="h-full w-2/6 text-start rounded border border-gray-300/20 bg-transparent p-1 font-semibold">
                  {el.descrizione}
                </span>
                <span className="h-full w-1/6 rounded border border-gray-300/20 bg-transparent p-1 font-semibold">
                  {el.ultEstrazione ? "SI" : "NO"}
                </span>
                <span className="h-full w-1/6 rounded border border-gray-300/20 bg-transparent p-1 font-semibold">
                  {el.extractedPl}
                </span>
                <MdDeleteForever
                  size={24}
                  className="mx-2 cursor-pointer transition-all hover:scale-125"
                  onClick={() => DelImprevisti(selectRefState, el.id)}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Form "AGGIUNGI Imprevisti" */}

        <div className="flex w-full items-center justify-between gap-2 px-1 pb-8">
          <AddImprevisti tipoImprevisto={selectRefState} />
          <span
            className="absolute bottom-8 right-8 flex cursor-pointer flex-col items-center text-sm font-semibold text-[--clr-prim]"
            onClick={() => console.log("Apri Modale con istruzioni")}
          >
            <MdInfoOutline size={32} />
            istruzioni
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default EditorImprevisti;
