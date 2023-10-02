import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import {MdClose} from "react-icons/md"

export default function FetchData(props) {
    const [imprevisto, setImprevisto] = useState([]);

    const {changeModalState} = props

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
            console.log(error ? error : "");
            changeModalState();
            fetchLista();
    };

    return (
        <div className="App">
            <div className="w-full mx-auto my-6 p-8 border border-teal-500 shadow-lg flex items-center justify-center">
                <h5 className="font-bold my-8 uppercase">{imprevisto.name}</h5>
            </div>
            <MdClose size={"3rem"} onClick={delElemento} className="absolute top-0 right-0 m-4 cursor-pointer"/>
        </div>
    );
}
