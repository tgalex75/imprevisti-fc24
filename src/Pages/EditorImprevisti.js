import { useState, useRef } from "react";
import { supabase } from "../supabaseClient";
import { motion } from "framer-motion";
import { MdSend, MdClear } from "react-icons/md";
//import { useForm } from "react-hook-form";
import useDeepCompareEffect from "use-deep-compare-effect";

const EditorImprevisti = () => {
  const [vociRegistro, setVociRegistro] = useState([]);
  const [selectRefState, setSelectRefState] = useState(null);

  /* const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm(); */

  const aggiornaTitoloImprRef = useRef([]);
  const aggiornaDescImprRef = useRef([]);
  const nuovoImprTitoloRef = useRef(null);
  const nuovoImprDescrRef = useRef(null);
  const selectRef = useRef(null);

  const handleNewImpr = (e) => {
    e.preventDefault();
    uploadNewImpr(nuovoImprTitoloRef, nuovoImprDescrRef);
    nuovoImprTitoloRef.current.value = null;
    nuovoImprDescrRef.current.value = null;
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

  useDeepCompareEffect(() => {
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

  const handleSelectRef = () => {
    setSelectRefState(selectRef.current.value);
    console.log(selectRef.current.value);
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

        <div className="relative flex h-3/5 w-full flex-col items-center gap-2">
          <h3 className="text-center uppercase text-[--clr-ter]">
            Imprevisti della Community
          </h3>
          <select
            ref={selectRef}
            onChange={handleSelectRef}
            className="w-48 rounded-md border py-1 text-sm font-semibold dark:border-black/20 dark:bg-black/30 dark:text-gray-300 dark:placeholder-black/10 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option selected className="bg-black/20" value="Prepartita">
              Prepartita
            </option>
            <option value="Speciali">Speciali</option>
          </select>
          <strong className="absolute right-1 top-0 font-semibold">
            # {vociRegistro.length}
          </strong>
          <ul className="flex h-full w-full flex-col gap-1 overflow-y-auto border p-4">
            {vociRegistro.map((el) => (
              <li
                key={el.id}
                className="text-md flex items-center justify-between gap-2 bg-gray-700/20 ps-2 text-left font-normal hover:bg-gray-600/50"
              >
                <input
                  className="w-1/6 rounded border border-gray-300/20 bg-transparent p-1 pe-6 font-semibold placeholder:font-normal placeholder:italic"
                  placeholder={el.titolo}
                  ref={(element) =>
                    (aggiornaTitoloImprRef.current[el.id] = element)
                  }
                />
                <input
                  className="w-5/6 rounded border border-gray-300/20 bg-transparent p-1 pe-6 font-semibold placeholder:font-normal placeholder:italic"
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
          <h3 className="text-center uppercase text-[--clr-ter]">
            Aggiungi il tuo imprevisto
          </h3>
          <form
            //onSubmit={handleSubmit((data) => console.log(data))}
            className="flex h-full w-1/2 flex-col items-center justify-center gap-1 rounded-md border-4 p-8 font-normal"
          >
            <label className="my-1 flex w-full items-center gap-4 self-start text-xs">
              Titolo Imprevisto
              {/* {errors.titolo && (
                <small className="right-0 text-[--clr-ter]">
                  Il campo Titolo è obbligatorio
                </small>
              )} */}
            </label>
            <input
              //{...register("titolo", { required: true, maxLength: 15 })}
              className="block w-full rounded p-1 text-sm  text-black placeholder:italic"
              placeholder="Titolo dell'imprevisto"
              ref={nuovoImprTitoloRef}
            />
            <label className="my-1 flex w-full items-center gap-4 self-start text-xs">
              Dettagli Imprevisto
              {/* {errors.dettagli && (
                <small className="text-[--clr-ter]">
                  Il campo Dettagli è obbligatorio
                </small>
              )} */}
            </label>
            <textarea
              //{...register("dettagli", { required: true })}
              ref={nuovoImprDescrRef}
              rows={3}
              id="nuovoImprevistoInput"
              placeholder="Descrizione dell'imprevisto"
              className="w-full rounded p-1 text-sm text-black placeholder:italic"
            />
            <button
              className="mt-2 w-1/2 rounded-lg bg-sky-700 py-1 font-semibold hover:bg-sky-600"
              onClick={handleNewImpr}
            >
              Salva
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default EditorImprevisti;

/* https://github.com/kentcdodds/use-deep-compare-effect */
