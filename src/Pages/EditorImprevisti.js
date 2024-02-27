import { useState, useEffect, useRef } from "react";
import { supabase } from "../supabaseClient";
import { motion } from "framer-motion";
import { MdSend, MdClear } from "react-icons/md";

const EditorImprevisti = () => {
  const [vociRegistro, setVociRegistro] = useState([]);

  const aggiornaTitoloImprRef = useRef([]);
  const aggiornaDescImprRef = useRef([]);
  const nuovoImprTitoloRef = useRef(null);
  const nuovoImprDescrRef = useRef(null);

  const handleNewImpr = (e) => {
    e.preventDefault();
    uploadNewImpr(nuovoImprTitoloRef, nuovoImprDescrRef);
  };

  const uploadNewImpr = async (titolo, descr) => {
    const { data, error } = await supabase
      .from("imprevisti")
      .insert([
        { titolo: titolo.current.value, descrizione: descr.current.value },
      ])
      .select();
    console.log(data ? data : console.log(error));
  };

  useEffect(() => {
    fetchRegistryList();
  }, [vociRegistro]);

  const fetchRegistryList = async () => {
    const { data } = await supabase.from("imprevisti").select("*");
    setVociRegistro(data ? data : []);
  };

  const removeVociRegistro = async (element) => {
    const { error } = await supabase
      .from("imprevisti")
      .delete()
      .eq("id", element);
    error && console.log(error);
  };

  const updateVociRegistro = async (element, refTitolo, refDescr) => {
    const { data, error } = await supabase
      .from("imprevisti")
      .update({ titolo: refTitolo, descrizione: refDescr })
      .eq("id", element)
      .select();
    console.log(data ? data : error);
  };

  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-6 px-4 pb-6 font-bold">
      <h1>Editor Imprevisti</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="flex h-full w-full items-center gap-2 overflow-hidden rounded-lg bg-black/50 p-2 text-gray-300 md:flex-col"
      >
        {/* Lista Imprevisti Attuale */}

        <div className="relative flex h-3/5 w-full flex-col gap-2">
          <h3 className="text-center uppercase text-[--clr-prim]">
            Imprevisti della Community
          </h3>
          <strong className="absolute right-1 top-0 font-semibold">
            # {vociRegistro.length}
          </strong>
          <ul className="flex h-full w-full flex-col-reverse gap-1 overflow-y-auto p-4 border">
            {vociRegistro.map((el) => (
              <li
                key={el.id}
                className="text-md flex items-center justify-between bg-gray-700/20 py-1 ps-2 text-left font-normal hover:bg-gray-600/50 gap-2"
              >
                <input
                  className="w-1/6 rounded pe-6 bg-transparent border border-gray-300/20"
                  placeholder={el.titolo}
                  ref={(element) =>
                    (aggiornaTitoloImprRef.current[el.id] = element)
                  }
                />
                <input
                  className="w-5/6 rounded pe-6 bg-transparent border border-gray-300/20"
                  placeholder={el.descrizione}
                  ref={(element) =>
                    (aggiornaDescImprRef.current[el.id] = element)
                  }
                />
                <MdClear
                  size={24}
                  className="mx-2 cursor-pointer fill-red-600 transition-all hover:scale-125 hover:fill-[--clr-sec]"
                  onClick={() => removeVociRegistro(el.id)}
                />
                <MdSend
                  size={24}
                  className="cursor-pointer fill-gray-300 transition-all hover:scale-125 hover:fill-gray-300"
                  onClick={() =>
                    updateVociRegistro(
                      el.id,
                      aggiornaTitoloImprRef.current[el.id].value,
                      aggiornaDescImprRef.current[el.id].value,
                    )
                  }
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Form "AGGIUNGI Imprevisti" */}

        <div className="flex h-2/5 w-full flex-col items-center gap-2 p-8">
          <h3 className="text-center uppercase text-[--clr-prim]">
            Aggiungi il tuo imprevisto
          </h3>
          <div className="flex h-full w-1/2 flex-col items-center justify-center rounded-md border-4 p-8 font-normal">
            <label className="my-1 block self-start text-xs">
              Titolo Imprevisto
            </label>
            <input
              className="placeholder:italic block w-full rounded p-1  text-sm text-black"
              placeholder="Titolo dell'imprevisto"
              ref={nuovoImprTitoloRef}
            />
            <label className="my-1 block self-start text-xs">
              Dettagli Imprevisto
            </label>
            <textarea
              ref={nuovoImprDescrRef}
              rows={3}
              id="nuovoImprevistoInput"
              placeholder="Descrizione dell'imprevisto"
              className="placeholder:italic w-full rounded p-1 text-sm text-black"
            />
            <button
              className="mt-2 w-full rounded-lg border border-[--clr-ter] hover:bg-[--clr-ter] hover:text-black hover:font-semibold py-1"
              onClick={handleNewImpr}
            >
              Salva
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EditorImprevisti;
