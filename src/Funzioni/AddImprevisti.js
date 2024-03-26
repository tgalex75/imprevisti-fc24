import { db } from "../Data/db";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";

export function AddImprevisti(props) {
  const { tipoImprevisto } = props;

  const [refState, setRefState] = useState("imprevisto");

  const ref = useRef(null);

  const handleRefState = () => {
    setRefState(ref.current.value);
  };

  const disabledField = refState === "noImprevisto";

  async function addImpr(data, e) {
    try {
      const id = await db[tipoImprevisto].add({
        titolo: disabledField ? "NESSUN IMPREVISTO" : data.titolo,
        descrizione: data.descrizione,
        isImprev: disabledField ? 0 : 1,
        ultEstrazione: disabledField ? 0 : data.ultEstrazione ? 1 : 0,
      });
      console.log(id);
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
    setRefState("imprevisto");
  }

  const {
    register: registerImprevisti,
    handleSubmit: handleSubmitImprevisti,
    formState: { errors: errorsImprevisti },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmitImprevisti(addImpr)}
      className="flex h-full w-full flex-col items-center justify-between gap-2 px-4 py-2 font-normal"
    >
      <h3 className="text-center uppercase text-[--clr-prim]">
        Aggiungi il tuo imprevisto
      </h3>

      <label
        htmlFor="isImprev"
        className="flex w-1/3 items-center justify-center gap-2"
      >
        Cosa vuoi inserire?
        {errorsImprevisti.isImprev && (
          <span className="text-[--clr-prim]">
            Seleziona un tipo di imprevisto!
          </span>
        )}
        <select
          id="isImprev"
          name="isImprev"
          {...registerImprevisti("isImprev")}
          defaultChecked
          ref={ref}
          onChange={handleRefState}
          className="w-fit self-center rounded-md border p-1 text-sm font-semibold dark:border-gray-300/80 dark:bg-black/30 dark:text-gray-300 dark:placeholder-black/10 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          <option value="imprevisto">IMPREVISTO</option>
          <option
            className={`${tipoImprevisto === "speciali" && "hidden"}`}
            value="noImprevisto"
          >
            NESSUN IMPREVISTO
          </option>
          <option
            className={`${tipoImprevisto === "prepartita" || tipoImprevisto === "settimana" ? "visible" : "hidden"}`}
            value="speciale"
          >
            IMPREVISTO SPECIALE
          </option>
        </select>
      </label>

      {/* TITOLO */}
      <section className="flex border p-2 rounded-md w-3/5">
        <div className="flex flex-col w-1/2 gap-2">
          <label className="my-1 flex flex-col gap-4 text-sm font-semibold">
            Titolo Imprevisto
            {errorsImprevisti.titolo && (
              <span className="text-[--clr-prim] w-full self-start">
                Il campo Titolo è obbligatorio - max 20 caratteri
              </span>
            )}
          </label>
          {refState !== "speciale" ? (
            <input
              name="titolo"
              {...registerImprevisti("titolo", {
                required: disabledField ? false : true,
                maxLength: 20,
              })}
              disabled={disabledField}
              className="block w-1/3 rounded p-1 text-sm  font-semibold uppercase text-black placeholder:normal-case placeholder:italic disabled:placeholder:text-black"
              placeholder={
                disabledField ? "NESSUN IMPREVISTO" : "Titolo dell'imprevisto"
              }
            />
          ) : (
            <input
              name="titolo"
              {...registerImprevisti("titolo", {
                required: disabledField ? false : true,
                maxLength: 20,
              })}
              value="IMPREVISTO SPECIALE"
              disabled={disabledField}
              className="block w-1/3 self-start rounded p-1 text-sm  font-semibold uppercase text-black placeholder:normal-case placeholder:italic disabled:placeholder:text-black"
              placeholder={
                disabledField ? "NESSUN IMPREVISTO" : "Titolo dell'imprevisto"
              }
            />
          )}

          {/* ESTRAZIONE EXTRA? */}

          <div className="flex items-center py-2">
            <label
              htmlFor="ultEstrazione"
              className="me-4 text-sm font-semibold text-gray-300"
            >
              Ulteriore estrazione necessaria dopo la prima?
            </label>
            <input
              {...registerImprevisti("ultEstrazione")}
              disabled={disabledField || refState === "speciale"}
              id="ultEstrazione"
              name="ultEstrazione"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
          </div>
        </div>

        {/* DESCRIZIONE */}
        <div className="flex w-1/2 flex-col gap-2 ">
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
            {...registerImprevisti("descrizione", {
              required: disabledField || refState === "speciale" ? false : true,
            })}
            rows={4}
            disabled={disabledField || refState === "speciale"}
            id="descrizione"
            placeholder="Descrizione dell'imprevisto"
            className="w-full rounded p-1 text-sm font-semibold text-black placeholder:italic"
          />
        </div>
      </section>
      <button
        type="submit"
        className="w-1/3 rounded-lg bg-sky-700 py-1 font-semibold hover:bg-sky-600"
      >
        Salva ed Invia
      </button>
    </form>
  );
}
