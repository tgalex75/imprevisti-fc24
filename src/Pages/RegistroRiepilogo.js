import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MdClear } from "react-icons/md";
import { mySelect } from "../Funzioni/schemi";

const Regolamento = () => {
  const [registroRiepilogo, setRegistroRiepilogo] = useState(() => {
    const saved = localStorage.getItem("registroRiepilogo");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const selectRef = useRef(null);
  const [filtro, setFiltro] = useState("Elenco completo");

  const getFiltro = () => {
    setFiltro(selectRef.current.value);
  };

  const listaFiltri = ["Elenco completo", "Rinnovi", "Mercato", "Ingaggio"];

  const filteredRegistry =
    filtro !== "Elenco completo"
      ? registroRiepilogo.filter((el) => el.tipo === filtro)
      : registroRiepilogo;

  useEffect(() => {
    localStorage.setItem("registroRiepilogo", JSON.stringify(registroRiepilogo));
  }, []);

  const removeVociRegistro = async (element) => {
    setRegistroRiepilogo(
      registroRiepilogo.filter((item) => item.titolo !== element.titolo),
    );
  };

  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-12 p-24 font-bold">
      <h1>Registro Giocatori</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="h-full w-full items-center gap-2 overflow-hidden rounded-lg bg-black/50 p-2 text-gray-300 md:flex md:flex-col"
      >
        {mySelect("Filtra elenco", selectRef, getFiltro, listaFiltri)}
        <ul className="flex h-full w-full flex-col gap-1 overflow-y-auto px-2 pb-2">
          {filteredRegistry.map((el) => (
            <li
              key={el.id}
              className="flex items-center justify-between bg-gray-700/20 py-1 ps-2 text-left text-sm uppercase"
            >
              {el.name} - {el.description} - {el.tipo}
              <MdClear
                size={20}
                className="cursor-pointer fill-red-700 transition-all hover:scale-125 hover:fill-red-600"
                onClick={() => removeVociRegistro(el.id)}
              />
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Regolamento;
