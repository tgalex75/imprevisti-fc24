import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function FetchData() {
  const [imprevisto, setImprevisto] = useState([]);

  useEffect(() => {
    fetchLista();
  }, []);

  useEffect(()=> {
    setTimeout(() => {
        delElemento()
    }, 3000);
  })

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
  };

  return (
  <p
  style={{ fontFamily: "'Handlee', cursive" }}
  className="flex-1 px-4 text-xl md:text-3xl">
    {imprevisto.name}
    </p>)
}
