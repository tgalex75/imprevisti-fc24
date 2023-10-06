import React, { useState } from "react";
import FetchData from "../Funzioni/FetchData";

const ImprevistoCommunity = (props) => {
    const [showModal, setShowModal] = useState(true);

    const changeModalState = () => {
        setShowModal((prevModal) => !prevModal);
    };

    return (
        showModal && (
            <section className="text-[--clr-prim] uppercase z-[900] w-[85vw] h-[75vh] p-12 flex flex-col items-center gap-32 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-800 rounded-xl shadow-xl ring ring-inset ring-white/75 border-8 border-[--clr-sec]">
                <h3
                    style={{
                        fontFamily: "'Gochi Hand', cursive",
                        filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
                    }}
                    className="text-5xl"
                >
                    Imprevisto della Community{" "}
                </h3>
                <FetchData changeModalState={changeModalState} />
            </section>
        )
    );
};

export default ImprevistoCommunity;
