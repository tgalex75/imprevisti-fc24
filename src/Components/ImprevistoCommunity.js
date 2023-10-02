import React, { useState } from "react";
import FetchData from "../Funzioni/FetchData";

const ImprevistoCommunity = (props) => {
    const [showModal, setShowModal] = useState(true);

    const changeModalState = () => {
        setShowModal((prevModal) => !prevModal);
    };

    return (
        showModal && (
            <section className="z-[2000] w-[75vw] h-[75vh] p-12 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-700/95 rounded-xl shadow-xl">
                <FetchData changeModalState={changeModalState} />
            </section>
        )
    );
};

export default ImprevistoCommunity;
