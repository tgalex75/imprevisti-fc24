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
        ultEstrazione: disabledField ? 0 : 1,
        extractedPl: disabledField ? 0 : parseInt(data.extractedPl),
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
      className="flex h-full w-full flex-col items-center justify-between gap-2 rounded-md border px-4 py-2 font-normal"
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
          <option value="noImprevisto">NESSUN IMPREVISTO</option>
        </select>
      </label>

      {/* TITOLO */}

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
          required: disabledField ? false : true,
          maxLength: 20,
        })}
        disabled={disabledField}
        className="block w-1/3 self-start rounded p-1 text-sm  font-semibold uppercase text-black disabled:placeholder:text-black placeholder:normal-case placeholder:italic"
        placeholder={disabledField ? "NESSUN IMPREVISTO" : "Titolo dell'imprevisto"}
      />

      {/* DESCRIZIONE */}

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
          required: disabledField ? false : true,
        })}
        rows={3}
        disabled={disabledField}
        id="descrizione"
        placeholder="Descrizione dell'imprevisto"
        className="w-full rounded p-1 text-sm font-semibold text-black placeholder:italic"
      />

      {/* NUMERO DI GIOCATORI ESTRATTI */}

      <div className="flex w-full flex-col gap-2 ">
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
            required: disabledField ? false : true,
          })}
          name="extractedPl"
          disabled={disabledField}
          id="extractedPl"
          type="number"
          className="block w-1/3 rounded p-1 text-sm font-semibold text-black placeholder:italic"
        />

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
            disabled={disabledField}
            id="ultEstrazione"
            name="ultEstrazione"
            type="checkbox"
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
  );
}
