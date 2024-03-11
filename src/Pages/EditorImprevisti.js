import { useState, useRef, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { motion } from "framer-motion";
import { MdSend, MdClear } from "react-icons/md";
import { useForm } from "react-hook-form";
import { MdInfoOutline } from "react-icons/md";
//import useDeepCompareEffect from "use-deep-compare-effect";

const EditorImprevisti = () => {
  const [vociRegistro, setVociRegistro] = useState([]);
  const [selectRefState, setSelectRefState] = useState("prepartita");

  const aggiornaTitoloImprRef = useRef([]);
  const aggiornaDescImprRef = useRef([]);
  const selectRef = useRef(null);

  const fetchRegistryList = async () => {
    const { data } = await supabase
      .from(selectRefState)
      .select("*");
    setVociRegistro(data ? data : []);
  };

  useEffect(() => {
    fetchRegistryList(); // eslint-disable-next-line
  }, [vociRegistro]);

  const removeVociRegistro = async (element) => {
    const { error } = await supabase
      .from(selectRefState)
      .delete()
      .eq("id", element);
    error && console.log(error);
  };

  const updateVociRegistro = async (element, refTitolo, refDescr) => {
    const { data, error } = await supabase
      .from(selectRefState === "prepartita" ? "prepartita" : "imprevisti")
      .update({ titolo: refTitolo.toUpperCase(), descrizione: refDescr })
      .eq("id", element)
      .select();
    console.log(data ? data : error);
  };

  const handleSelectRef = () => {
    setSelectRefState(selectRef.current.value);
  };

  // LOGICA NUOVO IMPREVISTO

  const uploadNewImpr = async (objForm) => {
    const { titolo, descrizione, ultEstrazione, extractedPl, isImprev } = objForm;
    const { data, error } = await supabase
      .from(selectRefState)
      .insert([
        {
          titolo: titolo.toUpperCase(),
          descrizione: descrizione,
          ultEstrazione: ultEstrazione && ultEstrazione,
          extractedPl: extractedPl && extractedPl,
          isImprev: isImprev && isImprev,
        },
      ])
      .select();
    console.log(data ? data : console.log(error));
  };

  const handleNewImpr = (objForm) => {
    uploadNewImpr(objForm);
  };

  const uploadNoImprevisti = async (array) => {
    const { data, error } = await supabase
      .from(selectRefState)
      .insert(array)
      .select();
    console.log(data ? data : console.log(error));
  }

  /* FORM INSERIMENTO IMPREVISTI */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* FORM INSERIMENTO "NO IMPREVISTI" */
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm();

  const onSubmit = (data, e) => {
    handleNewImpr(data);
    //console.log(data);
    e.target.reset();
  };

  const numberOfNoImpr = (data) => {
    const numberOfNoImprArray = [];
    const { nessunImprevisto } = data;
    const numberOfNoImpr = parseInt(nessunImprevisto);
    for (let number = 0; number < numberOfNoImpr; number++) {
      numberOfNoImprArray.push({ titolo: "NESSUN IMPREVISTO" });
    }
    uploadNoImprevisti(numberOfNoImprArray);
    //console.log(numberOfNoImprArray)
  };

  const onSubmitNoImpr = (data, e) => {
    numberOfNoImpr(data);
    e.target.reset();
  };

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
                <option>Seleziona</option>
                <option value="prepartita">Prepartita</option>
                <option value="settimana">Settimana</option>
                <option value="speciali">Speciali</option>
              </select>
            </label>
            <strong className="w-1/3 text-end font-semibold">
              Numero imprevisti: {vociRegistro.length}
            </strong>
          </header>
          <ul className="flex h-full w-full flex-col gap-1 overflow-y-auto rounded-lg border p-4">
            {vociRegistro.map((el) => (
              <li
                key={el.id}
                className="text-md flex items-center justify-between gap-2 bg-gray-700/20 ps-2 text-left font-normal hover:bg-gray-600/50"
              >
                <input
                  className="w-1/6 rounded border border-gray-300/20 bg-transparent p-1 pe-6 font-semibold uppercase placeholder:font-normal placeholder:italic"
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
                <MdClear
                  size={24}
                  className="mx-2 cursor-pointer fill-red-600 transition-all hover:scale-125 hover:fill-[--clr-sec]"
                  onClick={() => removeVociRegistro(el.id)}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Form "AGGIUNGI Imprevisti" */}

        <div className="flex w-full items-center justify-between gap-2 px-1 pb-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex h-full w-3/5 flex-col items-center justify-between gap-2 rounded-md border px-4 py-2 font-normal"
          >
            <h3 className="text-center uppercase text-[--clr-ter]">
              Aggiungi il tuo imprevisto
            </h3>
            <label className="my-1 flex w-full items-center gap-4 self-start text-sm font-semibold">
              Titolo Imprevisto
              {errors.titolo && (
                <span className="text-[--clr-ter]">
                  Il campo Titolo è obbligatorio - max 20 caratteri
                </span>
              )}
            </label>
            <input
              name="titolo"
              {...register("titolo", { required: true, maxLength: 20 })}
              className="block w-1/3 self-start rounded p-1 text-sm  font-semibold uppercase text-black placeholder:normal-case placeholder:italic"
              placeholder="Titolo dell'imprevisto"
            />
            <label className="my-1 flex w-full items-center gap-4 self-start text-sm font-semibold">
              Descrizione Imprevisto
              {errors.descrizione && (
                <span className="text-[--clr-ter]">
                  Il campo descrizione è obbligatorio
                </span>
              )}
            </label>
            <textarea
              name="descrizione"
              {...register("descrizione", { required: true })}
              rows={3}
              id="descrizione"
              placeholder="Descrizione dell'imprevisto"
              className="w-full rounded p-1 text-sm font-semibold text-black placeholder:italic"
            />
            <div
              className={`flex w-full flex-col gap-2 ${selectRefState === "speciali" && "invisible"}`}
            >
              <label className="my-1 flex w-full items-center gap-4 self-start text-sm font-semibold">
                Numero di giocatori da estrarre (da 0 a 10)
                {errors.extractedPl && (
                  <span className="text-[--clr-ter]">
                    Inserire un valore minimo di 0 ed uno massimo di 10
                  </span>
                )}
              </label>
              <input
                {...register("extractedPl", { min: 0, max: 10 })}
                name="extractedPl"
                id="extractedPl"
                type="number"
                placeholder="Quanti giocatori?"
                className="block w-1/3 rounded p-1 text-sm text-black placeholder:italic"
              />
              <div className="flex items-center py-2">
                <label
                  htmlFor="ultEstrazione"
                  className="me-4 text-sm font-semibold text-gray-300"
                >
                  Ulteriore estrazione necessaria dopo la prima?
                </label>
                <input
                  {...register("ultEstrazione")}
                  id="ultEstrazione"
                  name="ultEstrazione"
                  type="checkbox"
                  value=""
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-1/3 rounded-lg bg-sky-700 py-1 font-semibold hover:bg-sky-600"
            >
              Salva ed Invia
            </button>
          </form>
          {/* AGGIUNGI "NESSUN IMPREVISTO" */}
          <form
            onSubmit={handleSubmit2(onSubmitNoImpr)}
            className="flex h-full w-2/5 flex-col items-center justify-between gap-2 rounded-md border px-4 py-2 font-normal"
            style={selectRefState === "speciali" ? {visibility: "hidden"}: {}}  
>
            <h3 className="text-center uppercase text-[--clr-ter]">
              Aggiungi "NESSUN IMPREVISTO"
            </h3>
            <div className="flex w-full flex-1 flex-col gap-14">
              <label className="my-1 flex w-full items-center gap-4 self-start text-sm font-semibold">
                Numero di voci "NESSUN IMPREVISTO" da aggiungere alla lista
                degli imprevisti {selectRefState}
                {errors2.nessunImprevisto && (
                  <span className="text-[--clr-ter]">
                    Inserire un valore minimo di 0 ed uno massimo di 10
                  </span>
                )}
              </label>
              <input
                {...register2("nessunImprevisto", { min: 0 })}
                name="nessunImprevisto"
                id="nessunImprevisto"
                type="number"
                className="block w-1/3 self-center rounded p-1 text-sm text-black placeholder:italic"
              />
            </div>

            <button
              type="submit"
              className="w-1/3 rounded-lg bg-sky-700 py-1 font-semibold hover:bg-sky-600"
            >
              Salva ed Invia
            </button>
          </form>
          <span
            className="absolute bottom-8 right-8 flex cursor-pointer flex-col items-center text-sm font-semibold text-[--clr-ter]"
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
