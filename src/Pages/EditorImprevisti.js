import {useState, useEffect, useRef} from "react"
import { supabase } from "../supabaseClient";
import { MdClear } from "react-icons/md";
import {motion, AnimatePresence} from "framer-motion";

export default function EditorImprevisti() {
  
  const [listaImprevisto, setListaImprevisto] = useState([]);
  const inputRef = useRef(null)

  useEffect(() => {
    fetchLista();
  }, []);

  const fetchLista = async () => {
    let { data: imprevisti, error } = await supabase
    .from('imprevisti')
    .select('*');
  setListaImprevisto(imprevisti ? imprevisti : { id: 0, name: "LISTA VUOTA!!!" });
  error && console.log(error);
  };

  const filtraImprevisti = (id)=> {
    setListaImprevisto(listaImprevisto.filter((el) => el.id !== id))
  }

  const delElemento = async (id) => {
    const { error } = await supabase
      .from("imprevisti")
      .delete("id")
      .eq("id", id);
    console.log(error ? error : "");
    filtraImprevisti(id);
  };

  const uploadListDB = async (list) => {
    const { data, error } = await supabase
      .from("imprevisti")
      .insert([
        {
          name: list,
        },
      ])
      .select();
    data ? console.log("data: ", data) : console.log("error: ", error);
    console.log(list);
  };

    return (
        <section className="flex h-full w-full select-none flex-col items-center justify-between gap-2 px-4 py-6 font-bold md:p-8 md:py-16">
          <main className="flex flex-col w-full h-4/5 p-4 bg-black/30 text-sm font-medium overflow-y-auto gap-2">
          <AnimatePresence initial={false} mode="popLayout">
            {listaImprevisto.map(el => {
              return(
                <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{opacity: 0}}
                transition={{ duration: 0.4, type: "spring" }}
                key={el.id} className="flex items-center justify-between w-full bg-black/10">
                  {/* <p className="min-h-fit w-fit">{el.id}</p> */}
                  <p className="flex-1 h-auto">{el.name}</p>
                  <MdClear
                    size={18}
                    className="cursor-pointer fill-[--clr-ter] transition-all hover:scale-125 hover:fill-yellow-200"
                      onClick={()=> delElemento(el.id)}/>
                </motion.div>
              )})}
            </AnimatePresence>
            </main>
            <form className="relative mb-3 p-2 w-3/4 flex flex-col items-center gap-2" data-te-input-wrapper-init>
              <label
                htmlFor="customImpr"
                className="pointer-events-none left-3 text-xs top-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-300 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >Scrivi il tuo imprevisto</label>
                <textarea
                  className="border bg-black/30 peer block min-h-[auto] w-full rounded px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="customImpr"
                  rows="2"
                  ref={inputRef}
                  placeholder="Your message"></textarea>
                  <button className="px-6 py-2 drop-shadow-2xl bg-orange-700 hover:bg-orange-600 w-24 rounded-lg" onClick={()=> uploadListDB(inputRef.current.value)}>Invia</button>
              </form>
          </section>
    )
}