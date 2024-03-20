import { useState, useRef, useEffect, useCallback, useContext } from "react";
import { CartContext } from "../context/regContext";
import { motion } from "framer-motion";
import { MdSend, MdClear } from "react-icons/md";
import { useForm } from "react-hook-form";
import { MdInfoOutline } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

const EditorImprevisti = () => {
  const [selectRefState, setSelectRefState] = useState("prepartita");

  const { regPrepartita, regSettimana, regSerieNegativa, regSpeciali } = useContext(CartContext);

  console.log(regPrepartita, regSerieNegativa, regSpeciali, regSettimana)

  const [vociRegistro, setVociRegistro] = useState(regPrepartita);

  const aggiornaTitoloImprRef = useRef([]);
  const aggiornaDescImprRef = useRef([]);
  const selectRef = useRef(null);

  const removeVociRegistro = (element) => {
    setVociRegistro(prev => [
      prev.filter(el => (el[0][selectRefState].id !== element))
    ])
  };

  //console.log(vociRegistro[0].prepartita)


  const handleSelectRef = useCallback(() => {
    setSelectRefState(selectRef.current.value);
  }, []);

  const {
    register: registerImprevisti,
    handleSubmit: handleSubmitImprevisti,
    formState: { errors: errorsImprevisti },
  } = useForm();

  const {
    register: registerNoImprevisti,
    handleSubmit: handleSubmitNoImprevisti,
    formState: { errors: errorsNoImprevisti },
  } = useForm();

  const onSubmitImprevisti = (data, e) => {
    e.target.reset();
    setVociRegistro((prev) => [
    prev.push({
        id: uuidv4(),
        titolo: data.titolo.toUpperCase(),
        descrizione: data.descrizione,
        isImprev: true,
        ...(selectRefState !== "speciali"
          ? { ultEstrazione: data.ultEstrazione, extractedPl: data.extractedPl }
          : {}),
      }),
    ]);
  };

  const onSubmitNoImprevisti = (data, e) => {
    const { nessunImprevisto } = data;
    const numberOfNoImpr = parseInt(nessunImprevisto);
    for (let number = 0; number < numberOfNoImpr; number++) {
      setVociRegistro((prev) => [
        ...prev,
        prev[0][selectRefState].push({
          id: uuidv4(),
          titolo: "NESSUN IMPREVISTO",
          descrizione: "",
          isImprev: false,
        }),
      ]);
    }
    e.target.reset();
  };

  useEffect(() => {
    localStorage.setItem("vociRegistro", JSON.stringify(vociRegistro));
  }, [vociRegistro]);

  //const mappedlist = vociRegistro[0][selectRefState];

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
              Numero imprevisti: {}
            </strong>
          </header>
          <ul className="flex h-full w-full flex-col gap-1 overflow-y-auto rounded-lg border p-4">
            {vociRegistro.map((el) => (
              <li
                key={Math.random()}
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
                  /* onClick={() =>
                    updateVociRegistro(
                      el.id,
                      aggiornaTitoloImprRef.current[el.id].value,
                      aggiornaDescImprRef.current[el.id].value,
                    )
                  } */
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
            onSubmit={handleSubmitImprevisti(onSubmitImprevisti)}
            className="flex h-full w-3/5 flex-col items-center justify-between gap-2 rounded-md border px-4 py-2 font-normal"
          >
            <h3 className="text-center uppercase text-[--clr-prim]">
              Aggiungi il tuo imprevisto
            </h3>
            <label className="my-1 flex w-full items-center gap-4 self-start text-sm font-semibold">
              Titolo Imprevisto
              {errorsImprevisti.titolo && (
                <span className="text-[--clr-prim]">
                  Il campo Titolo è obbligatorio - max 20 caratteri
                </span>
              )}
            </label>
            <input
              name="titolo"
              {...registerImprevisti("titolo", {
                required: true,
                maxLength: 20,
              })}
              className="block w-1/3 self-start rounded p-1 text-sm  font-semibold uppercase text-black placeholder:normal-case placeholder:italic"
              placeholder="Titolo dell'imprevisto"
            />
            <label className="my-1 flex w-full items-center gap-4 self-start text-sm font-semibold">
              Descrizione Imprevisto
              {errorsImprevisti.descrizione && (
                <span className="text-[--clr-prim]">
                  Il campo descrizione è obbligatorio
                </span>
              )}
            </label>
            <textarea
              name="descrizione"
              {...registerImprevisti("descrizione", { required: true })}
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
                {errorsImprevisti.extractedPl && (
                  <span className="text-[--clr-prim]">
                    Inserire un valore minimo di 0 ed uno massimo di 10
                  </span>
                )}
              </label>
              <input
                {...registerImprevisti("extractedPl", {
                  min: 0,
                  max: 10,
                  required: true,
                })}
                name="extractedPl"
                value={1}
                id="extractedPl"
                type="number"
                placeholder="Quanti giocatori?"
                className="block w-1/3 rounded p-1 text-sm font-semibold text-black placeholder:italic"
              />
              <div className="flex items-center py-2">
                <label
                  htmlFor="ultEstrazione"
                  className="me-4 text-sm font-semibold text-gray-300"
                >
                  Ulteriore estrazione necessaria dopo la prima?
                </label>
                <input
                  {...registerImprevisti("ultEstrazione")}
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
            onSubmit={handleSubmitNoImprevisti(onSubmitNoImprevisti)}
            className="flex h-full w-2/5 flex-col items-center justify-between gap-2 rounded-md border px-4 py-2 font-normal"
            style={
              selectRefState === "speciali" ? { visibility: "hidden" } : {}
            }
          >
            <h3 className="text-center uppercase text-[--clr-prim]">
              Aggiungi "NESSUN IMPREVISTO"
            </h3>
            <div className="flex w-full flex-1 flex-col gap-14">
              <label className="my-1 flex w-full items-center gap-4 self-start text-sm font-semibold">
                Numero di voci "NESSUN IMPREVISTO" da aggiungere alla lista di
                tipo {selectRefState.toUpperCase()}
                {errorsNoImprevisti.nessunImprevisto && (
                  <span className="text-[--clr-prim]">
                    Inserire un valore minimo di 0 ed uno massimo di 10
                  </span>
                )}
              </label>
              <input
                {...registerNoImprevisti("nessunImprevisto", { min: 0 })}
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
