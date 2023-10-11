import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { MdClose } from "react-icons/md";
import deadpool from "../assets/imgs/deadpool.png";
import { motion } from "framer-motion";

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
    setImprevisto(data ? data : {id: 0, name: "LISTA VUOTA!!!"});
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

  console.log(imprevisto)

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
        backgroundSize: "20%",
      }}
      className="mx-auto my-6 flex h-full w-full items-center justify-center rounded-xl border-8 border-[--clr-prim] bg-left-bottom bg-no-repeat p-8 shadow-lg ring ring-inset ring-white/75"
    >
      <h3
        style={{
          fontFamily: "'Handlee', cursive",
          filter: "drop-shadow(.05rem .05rem 0.2rem #000)",
        }}
        className="my-8 ps-[30%] text-center text-3xl uppercase italic"
      >
        {imprevisto.name}
      </h3>
      <motion.div
        className="absolute right-0 top-0 m-4 cursor-pointer"
          whileHover={{
          scale: 1.2,
          rotate: 90,
        }}
        transition={{type: "spring", stiffness: 300 }}
      >
        <MdClose
          size={"3rem"}
          onClick={delElemento}
          className=" fill-gray-300 hover:fill-[--clr-sec]"
        />
      </motion.div>
    </motion.div>
  );
}
