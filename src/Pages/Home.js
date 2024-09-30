import React from "react";
import { Link } from "react-router-dom";
import mullin from "../assets/imgs/mullin.png";
import ryanmac from "../assets/imgs/ryanmac.jpg";
import logoStadio from "../assets/imgs/logo_stadio.jpg";
import logoStadioMobile from "../assets/imgs/logo_stadio_mobile.jpg";
import stadio from "../assets/imgs/stadio.jpg";
import serieNegativa from "../assets/imgs/serienegativa.jpg";
import rinnovi from "../assets/imgs/rinnovo.jpg";
import { isMobile } from "react-device-detect";

const dettagliImprevisti = [
    { id: 1, impr: "Imprevisti prepartita", img: ryanmac, link: "/prepartita" },
    { id: 2, impr: "Imprevisti Settimanali", img: stadio, link: "/settimana" },
    {
        id: 3,
        impr: "Imprevisti serie negativa",
        img: serieNegativa,
        link: "/serie-negativa",
    },
    {
        id: 4,
        impr: "Imprevisti offerte mercato",
        img: mullin,
        link: "/offerte-mercato",
    },
    {
        id: 5,
        impr: "Imprevisti di ingaggio",
        img: isMobile ? logoStadioMobile : logoStadio,
        link: "/ingaggio",
    },
    { id: 6, impr: "Imprevisti sui Rinnovi", img: rinnovi, link: "/rinnovi" },
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
                    className="group flex items-center justify-start w-full md:w-1/6 md:hover:w-full h-1/6 md:h-full md:hover:h-full cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.770, 0.000, 0.175, 1.000)] hover:text-gray-300"
                >
                    <h2
                        style={{
                            writingMode: isMobile ? "" : "vertical-lr",
                            transform: isMobile ? "" : "rotate(180deg)",
                            textShadow: "rgb(34, 34, 34) 0px 4px 4px",
                        }}
                        className="w-1/6 flex items-center justify-center text-center md:justify-start group-hover:px-6 transition-all group-hover:w-2/6 md:w-auto md:group-hover:w-auto group-hover:border-l-[.35rem] md:group-hover:border-l-[.5rem] group-hover:border-[--clr-sec] uppercase font-bold text-[1.7vw] md:text-[2.2vw] md:ps-8 text-gray-200 drop-shadow-lg group-hover:bg-[--clr-prim] bg-[rgb(16,84,66,.95)] h-full px-4 md:px-2"
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
