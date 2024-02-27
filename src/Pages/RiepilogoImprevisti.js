import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { motion } from "framer-motion";
import { MdClear } from "react-icons/md";
import datiPrepartita from "../Data/datiPrepartita";

const RiepilogoImprevisti = () => {
  const [vociRegistro, setVociRegistro] = useState([]);

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

  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-12 px-4 pb-6 font-bold">
      <h1>Riepilogo Imprevisti</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="flex h-full w-full items-center gap-2 overflow-hidden rounded-lg bg-black/50 p-2 text-gray-300 md:flex-col"
      >
        <div className="flex h-1/4 w-full flex-col gap-2">
          <h3 className="text-center uppercase text-[--clr-prim]">
            Imprevisti Prepartita
          </h3>
          <ul className="flex h-full w-full flex-col gap-1 overflow-y-auto px-2 pb-2">
            {datiPrepartita.map(
              (el) =>
                el.title.toUpperCase() !== "NESSUN IMPREVISTO" && (
                  <li
                    key={el.id}
                    className="flex items-center justify-start gap-8 bg-gray-700/20 py-1 ps-2 text-left text-sm hover:bg-gray-600/50"
                  >
                    <strong className="uppercase">{el.title}</strong>
                    <em className="font-medium">{el.description}</em>
                  </li>
                ),
            )}
          </ul>
        </div>
        <div className="relative flex h-3/4 w-full flex-col gap-2">
          <h3 className="text-center uppercase text-[--clr-prim]">
            Imprevisti della Community
          </h3>
          <strong className="absolute right-1 top-0 font-semibold">
            # {vociRegistro.length}
          </strong>
          <ul className="flex h-full w-full flex-col gap-1 overflow-y-auto px-2 pb-2">
            {vociRegistro.map((el) => (
              <li
                key={el.id}
                className="text-md flex items-center justify-between bg-gray-700/20 py-1 ps-2 text-left font-normal hover:bg-gray-600/50"
              >
                <div className="flex w-full gap-2">
                  <span className="w-1/6 font-semibold uppercase">
                    {el.titolo}
                  </span>
                  <span className="w-5/6 capitalize italic">
                    {el.descrizione}
                  </span>
                </div>
                <MdClear
                  size={20}
                  className="cursor-pointer fill-red-600 transition-all hover:scale-125 hover:fill-red-500"
                  onClick={() => removeVociRegistro(el.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default RiepilogoImprevisti;