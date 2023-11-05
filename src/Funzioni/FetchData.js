import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { MdClose } from "react-icons/md";
import deadpool from "../assets/imgs/deadpool.png";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import SecondaEstrazione from "../Components/SecondaEstrazione";

export default function FetchData(props) {
  const [imprevisto, setImprevisto] = useState([]);

  const { changeModalState } = props;

  useEffect(() => {
    fetchLista();
  }, []);

  const fetchLista = async () => {
    const { data } = await supabase
      .from("random_sort")
      .select("*")
      .limit(1)
      .single();
    setImprevisto(data ? data : { id: 0, name: "LISTA VUOTA!!!" });
  };

  const delElemento = async () => {
    const { error } = await supabase
      .from("imprevisti")
      .delete("id")
      .eq("id", imprevisto.id);
    console.log(error ? error : "");
    changeModalState();
    fetchLista();
  };

  console.log(imprevisto);

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 1,
        type: "spring",
        stiffness: 200,
      }}
      style={{
        backgroundImage: `url(${deadpool})`,
        backgroundSize: isMobile ? "40%" : "20%",
      }}
      className="mx-auto flex h-full w-full flex-col items-center justify-between gap-2 rounded-xl bg-left-bottom bg-no-repeat px-6 py-4 shadow-lg ring ring-inset ring-white/75 md:gap-4 md:p-6"
    >
      <motion.div
        className="cursor-pointer self-end"
        whileHover={{
          scale: 1.2,
          rotate: 90,
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <MdClose
          size={48}
          onClick={delElemento}
          className=" fill-gray-300 hover:fill-[--clr-sec]"
        />
      </motion.div>
      <h3
        style={{
          fontFamily: "'Handlee', cursive",
          filter: "drop-shadow(.05rem .05rem 0.2rem #000)",
        }}
        className="text-sm my-8 flex flex-1 items-center text-center uppercase italic text-gray-200 md:ps-[30%] md:text-2xl"
      >
        {imprevisto.name}
      </h3>
        <SecondaEstrazione />
    </motion.div>
  );
}
