import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { MdClose } from "react-icons/md";
import deadpool from "../assets/imgs/deadpool.png";

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
        <div
            style={{
                backgroundImage: `url(${deadpool})`,
                backgroundSize: "20%",
            }}
            className="bg-left-bottom bg-no-repeat w-full h-full mx-auto my-6 p-8 ring ring-inset ring-white/75 border-8 border-[--clr-prim] shadow-lg flex items-center justify-center rounded-xl"
        >
            <h3
                style={{ fontFamily: "'Handlee', cursive" }}
                className="text-4xl ps-[30%] italic text-center my-8 uppercase"
            >
                {imprevisto.name}
            </h3>
            <MdClose
                size={"3rem"}
                onClick={delElemento}
                className="absolute top-0 right-0 m-4 cursor-pointer hover:fill-[--clr-sec] fill-gray-300"
            />
        </div>
    );
}
