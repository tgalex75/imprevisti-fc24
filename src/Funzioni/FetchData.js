import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function App() {
    const [imprevisto, setImprevisto] = useState([]);

    useEffect(() => {
        fetchLista();
    }, []);

    const fetchLista = async () => {
        const { data } = await supabase
            .from("random_sort")
            .select("*")
            .limit(1)
            .single();
        setImprevisto(data ? data : ["LISTA VUOTA!!!"]);
        console.log("data => ", data);
    };

    const delElemento = async () => {
        const { error } = await supabase
            .from("imprevisti")
            .delete("id")
            .eq("id", imprevisto.id);
            console.log(imprevisto.id);
            fetchLista();
    };

    return (
        <div className="App">
            <div className="w-1/2 mx-auto my-6 p-8 border border-teal-500 shadow-lg flex items-center justify-center">
                <h5 className="font-bold my-8 uppercase">{imprevisto.name}</h5>
            </div>
            <button className="mt-6 inline-block border-2 text-white shadow-md bg-orange-700 p-4 font-bold rounded-md" onClick={delElemento}>
                Click me
            </button>
        </div>
    );
}
