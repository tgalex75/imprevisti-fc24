import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function FetchData() {
  const [imprevisto, setImprevisto] = useState([]);

  useEffect(() => {
    fetchLista();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      delElemento();
    }, 3000);
  });

  const fetchLista = async () => {
    const { data } = await supabase
      .from("random_sort")
      .select("*")
      .limit(1)
      .single();
    setImprevisto(
      data ? data : { id: 0, titolo: "", descrizione: "LISTA VUOTA!!!" },
    );
  };

  const delElemento = async () => {
    const { error } = await supabase
      .from("imprevisti")
      .delete("id")
      .eq("id", imprevisto.id);
    error && console.log(error);
  };

  return (
    <>
      <h4 className="text-2xl uppercase md:text-4xl">{imprevisto.titolo}</h4>
      <p
        style={{ fontFamily: "'Handlee', cursive" }}
        className={`h-fit flex-1 overflow-y-auto px-4 ${
          imprevisto.descrizione && imprevisto.descrizione.length > 200
            ? "text-sm md:text-xl"
            : "text-xl md:text-3xl"
        }`}
      >
        {imprevisto.descrizione}
      </p>
    </>
  );
}
