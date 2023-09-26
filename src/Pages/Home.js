import React from "react";
import mullin from "../assets/imgs/mullin.png";
import ryanmac from "../assets/imgs/ryanmac.jpg";
import logoStadio from "../assets/imgs/logo_stadio.jpg";
import stadio from "../assets/imgs/stadio.jpg";
import serieNegativa from "../assets/imgs/serienegativa.jpg";
import rinnovi from "../assets/imgs/rinnovo.jpg";

const dettagliImprevisti = [
    { id: 1, impr: "Imprevisto prepartita", img: ryanmac },
    { id: 2, impr: "Imprevisto Settimanali", img: stadio },
    { id: 3, impr: "Imprevisto serie negativa", img: serieNegativa },
    { id: 4, impr: "Calciomercato: Offerte ricevute", img: mullin },
    { id: 5, impr: "Imprevisti di ingaggio", img: logoStadio },
    { id: 6, impr: "Rinnovi", img: rinnovi },
];

const Home = () => {
    return (
        <section className="h-screen w-full bg-stone-950 flex flex-col md:flex-row items-center justify-around font-bold text-gray-800 overflow-hidden">
            {dettagliImprevisti.map((el) => (
                <div
                    key={el.id}
                    className="group flex items-center justify-start w-1/6 hover:w-full h-full cursor-pointer transition-all
                        border-yellow-600 hover:text-gray-300 hover:border-8"
                >
                    <h2
                        style={{
                            writingMode: "sideways-lr",
                            textShadow: "rgb(34, 34, 34) 0px 4px 4px",
                        }}
                        className="uppercase font-bold text-[2.2vw] text-left pb-12 text-gray-200 drop-shadow-lg bg-[rgb(16,84,66,.95)] h-full px-4"
                    >
                        {el.impr}
                    </h2>
                    <div
                        style={{ backgroundImage: `url(${el.img})` }}
                        className="bg-center bg-cover bg-no-repeat grayscale hover:grayscale-0 w-full h-full bg-black/20 flex justify-end items-end "
                    >
                        <button
                            type="button"
                            className="invisible group-hover:visible p-4 mb-2 mr-4 drop-shadow-lg me-4 rounded-md border-gray-300 z-[100] bg-gradient-to-b from-[rgb(16,84,66)] to-green-950 hover:from-green-950 hover:to-[rgb(16,84,66)]"
                        >
                            Vai alla sezione
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Home;
