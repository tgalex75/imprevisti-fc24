import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { motion } from "framer-motion";
import { MdClear } from "react-icons/md";
import datiPrepartita from "../Data/datiPrepartita";
import datiSettimana from "../Data/datiSettimana";

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
    <section className="flex h-full w-full flex-col items-center justify-center gap-12 p-4 font-bold">
      <h1>Riepilogo Imprevisti</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="h-full w-full items-center gap-2 overflow-hidden rounded-lg bg-black/50 p-2 text-gray-300 md:flex"
      >
        <div className="flex h-full w-full flex-col gap-2">
          <h3 className="text-center uppercase text-[--clr-ter]">
            Imprevisti Prepartita
          </h3>
          <ul className="flex h-full w-full flex-col gap-1 overflow-y-auto px-2 pb-2">
            {datiPrepartita.map((el) => (
              <li
                key={el.id}
                className="flex items-center gap-2 justify-start bg-gray-700/20 py-1 ps-2 text-left text-sm odd:bg-gray-800/20"
              >
                 <strong className="uppercase">{el.title.toUpperCase() !== "NESSUN IMPREVISTO" && el.title}</strong>
                <em className="font-medium">{el.title.toUpperCase() !== "NESSUN IMPREVISTO" && el.description}</em>
              </li>
            ))}
          </ul>
          <h3 className="text-center uppercase text-[--clr-ter]">
            Imprevisti Settimana
          </h3>
          <ul className="flex h-full w-full flex-col gap-1 overflow-y-auto px-2 pb-2">
            {datiSettimana.map((el) => (
               <li
               key={el.id}
               className="flex items-center gap-2 justify-start bg-gray-700/20 py-1 ps-2 text-left text-sm odd:bg-gray-800/20"
             >
                <strong className="uppercase">{el.title.toUpperCase() !== "NESSUN IMPREVISTO" && el.title}</strong>
               <em className="font-medium">{el.title.toUpperCase() !== "NESSUN IMPREVISTO" && el.description}</em>
             </li>
            ))}
          </ul>
        </div>
        <div className="flex h-full w-full flex-col gap-2">
          <h3 className="text-center uppercase text-[--clr-ter]">
            Imprevisti della Community
          </h3>
          <ul className="flex h-full w-full flex-col gap-1 overflow-y-auto px-2 pb-2">
            {vociRegistro.map((el) => (
              <li
                key={el.id}
                className="flex items-center justify-between bg-gray-700/20 py-1 ps-2 text-left text-sm uppercase"
              >
                {el.name}
                <MdClear
                  size={20}
                  className="cursor-pointer fill-red-700 transition-all hover:scale-125 hover:fill-red-600"
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
