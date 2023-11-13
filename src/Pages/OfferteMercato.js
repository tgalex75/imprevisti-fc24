import React, { useState, useEffect, useRef } from "react";
import Dado from "../Components/Dado";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import RegistroMercato from "../Components/RegistroMercato";
import { supabase } from "../supabaseClient";

const OfferteMercato = () => {
  const [casuale, setCasuale] = useState(null);

  const estraiNumeroCasuale = () => {
    setCasuale(Math.floor(Math.random() * 10) + 1);
  };

  const isImpr = casuale === 5;

  const inputRef = useRef(null);

  const [vociRegistro, setVociRegistro] = useState([]);

  useEffect(() => {
    fetchRegistryList();
  }, [vociRegistro]);

  const fetchRegistryList = async () => {
    const { data } = await supabase.from("registro").select("*");
    setVociRegistro(data ? data : []);
  };

  const uploadListDB = async (list) => {
    const { data, error } = await supabase
      .from("registro")
      .insert([
        {
          id: list.id,
          name: list.name,
          description: list.description,
          tipo: list.tipo,
        },
      ])
      .select();
    data ? console.log("data: ", data) : console.log("error: ", error);
  };

  const deleteListDB = async () => {
    const { error } = await supabase
      .from("registro")
      .delete("id")
      .lt("id", 1000);
    error && console.log(error);
  };

  const removeVociRegistro = async (element) => {
    const { error } = await supabase
      .from("registro")
      .delete()
      .eq("id", element);
    error && console.log(error);
  };

  return (
    <section className="flex h-full w-full select-none flex-col items-center justify-around gap-2 px-4 py-6 font-bold md:p-8">
      <h1>{isMobile ? "Calciomercato" : "Imprevisto Offerte Calciomercato"}</h1>
      {/* BOX PRIMA ESTRAZIONE */}
      <motion.div
        initial={{ opacity: 0, x: "-10vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.4, type: "spring" }}
        key={casuale}
        id="containerPrimaEstrazione"
        style={isImpr ? { color: "var(--clr-ter)" } : {}}
        className="flex h-full w-full select-none flex-col items-center justify-around rounded-xl bg-black/50 px-4 pb-4 text-center shadow-lg ring ring-inset ring-white/75 md:px-10 md:pb-8"
      >
        {!casuale && (
          <h2
            style={{ fontFamily: "'Handlee', cursive" }}
            className="text-5xl italic"
          >
            Lancia il dado...
          </h2>
        )}

        {casuale && (
          <>
            <motion.p
              initial={{ opacity: 0, x: "50vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring" }}
              style={{
                filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
              }}
              className="flex h-8 w-8 items-center justify-around rounded-full bg-gray-300/20 p-8 text-4xl md:p-12 md:text-6xl"
            >
              {casuale}
            </motion.p>

            <h2
              style={{
                fontFamily: "'Boogaloo', sans-serif",
                filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
              }}
              className={
                isImpr
                  ? "text-5xl font-extrabold uppercase md:text-7xl"
                  : "hidden"
              }
            >
              imprevisto!
            </h2>
            <h3
              style={{ filter: "drop-shadow(.05rem .05rem 0.1rem #000)" }}
              className="text-4xl font-extrabold uppercase md:text-6xl"
            >
              {isImpr ? "Mercenario" : "Bilancio in Ordine"}
            </h3>
            <p
              style={{
                fontFamily: "'Handlee', cursive",
                filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
              }}
              className="mt-4 px-4 text-2xl md:w-3/5 md:text-4xl"
            >
              {isImpr
                ? "Accetta l'offerta o raddoppia l'ingaggio appena possibile"
                : "Totale libertà di scelta"}
            </p>
            {/* Pulsanti per inserimento nome giocatore nel registro */}
            <div className="hidden text-start md:flex md:w-1/3 md:flex-col">
              <label
                htmlFor="nome-giocatore"
                className="mb-1 inline-block text-xs text-gray-300 md:text-sm"
              >
                Giocatore da annotare nel registro
              </label>
              <div className="hidden items-center justify-between gap-2 md:flex">
                <input
                  ref={inputRef}
                  type="text"
                  id="nome-giocatore"
                  className="h-10 w-1/2 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-2 py-2 text-sm text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                  name="nomeGiocatore"
                  placeholder="Nome del giocatore"
                />
                <button
                  type="button"
                  className="h-10 w-1/2 rounded-lg bg-sky-700 px-2 py-2 text-center text-sm font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
                  onClick={() =>
                    uploadListDB({
                      id: vociRegistro.length + 1,
                      name: inputRef.current.value,
                      description: isImpr ? "Mercenario" : "Trattativa libera",
                      tipo: "Mercato",
                    })
                  }
                >
                  Aggiungi al Registro
                </button>
              </div>
            </div>

            <RegistroMercato
              vociRegistro={vociRegistro}
              deleteListDB={deleteListDB}
              removeVociRegistro={removeVociRegistro}
            />
          </>
        )}
      </motion.div>
      {Dado(estraiNumeroCasuale)}
    </section>
  );
};

export default OfferteMercato;
