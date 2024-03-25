import React from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

const dettagliImprevisti = [
    { id: 1, impr: "Imprevisti prepartita", img: "", link: "/prepartita" },
    { id: 2, impr: "Imprevisti Settimanali", img: "", link: "/settimana" },
    {
        id: 3,
        impr: "Imprevisti serie negativa",
        img: "",
        link: "/serie-negativa",
    },
    {
        id: 4,
        impr: "Media Overall",
        img: "",
        link: "/calcolo-media",
    },
    {
        id: 5,
        impr: "Editor Imprevisti",
        img: isMobile ? "" : "",
        link: "/editor-imprevisti",
    },

];

const Home = () => {
    return (
        <section className="h-screen w-full bg-stone-950 flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center justify-around font-bold text-gray-800 overflow-hidden">
            {dettagliImprevisti.map((el) => (
                <div
                    key={el.id}
                    style={{
                        boxShadow: "-12px 0px 10px -3px rgba(2,2,2,0.5)",
                        zIndex: el.id,
                    }}
                    className="group flex items-center justify-start w-full md:w-1/5 md:hover:w-full h-1/5 md:h-full md:hover:h-full cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.770, 0.000, 0.175, 1.000)] hover:text-gray-300"
                >
                    <h2
                        style={{
                            writingMode: isMobile ? "" : "vertical-lr",
                            transform: isMobile ? "" : "rotate(180deg)",
                            textShadow: "rgb(34, 34, 34) 0px 4px 4px",
                        }}
                        className="w-1/5 flex items-center justify-center text-center md:justify-start group-hover:px-6 transition-all group-hover:w-2/6 md:w-auto md:group-hover:w-auto group-hover:border-l-[.35rem] md:group-hover:border-l-[.5rem] group-hover:border-[--clr-ter] uppercase font-bold text-[1.7vw] md:text-[2.2vw] md:ps-8 text-gray-200 drop-shadow-lg group-hover:bg-[--clr-prim] bg-[--clr-ter] h-full px-4 md:px-2"
                    >
                        {el.impr}
                    </h2>
                    <div
                        style={{
                            backgroundImage: `url(${el.img})`,
                            /* height: "100vh", */
                        }}
                        className="bg-top md:bg-center transition-all bg-cover bg-no-repeat grayscale group-hover:grayscale-0 group-hover:w-4/6 w-5/6 md:w-full md:group-hover:w-full h-full bg-black/20 flex justify-end items-end "
                    >
                        <Link
                            to={el.link}
                            className="w-full h-full block bg-transparent"
                        >
                        </Link>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Home;
