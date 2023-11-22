import {useState, useEffect} from "react"
import { supabase } from "../supabaseClient";

export default function EditorImprevisti() {
    const [imprevisto, setImprevisto] = useState([]);


  useEffect(() => {
    fetchLista();
  }, []);

  const fetchLista = async () => {
    
let { data: imprevisti, error } = await supabase
  .from('imprevisti')
  .select('*')   
  setImprevisto(data ? data : { id: 0, name: "LISTA VUOTA!!!" });
  };

  const delElemento = async () => {
    const { error } = await supabase
      .from("imprevisti")
      .delete("id")
      .eq("id", imprevisto.id);
    console.log(error ? error : "");
    fetchLista();
  };
    return (
        <section className="flex h-full w-full select-none flex-col items-center justify-around gap-2 px-4 py-6 font-bold md:p-8">
            Editor Imprevisti
            </section>

    )
}