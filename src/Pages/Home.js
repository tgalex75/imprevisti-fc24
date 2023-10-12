import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/imgs/img1.jpg"
import img2 from "../assets/imgs/img2.jpg"
import img3 from "../assets/imgs/img3.jpg"
import img4 from "../assets/imgs/img4.jpg"
import img5 from "../assets/imgs/img5.jpg"
import img6 from "../assets/imgs/img6.jpg"

const dettagliImprevisti = [
  { id: 1, impr: "Imprevisto prepartita", img: img1, link: "/prepartita" },
  { id: 2, impr: "Imprevisto Settimanali", img: img2, link: "/settimana" },
  {
    id: 3,
    impr: "Imprevisto serie negativa",
    img: img3,
    link: "/serie-negativa",
  },
  {
    id: 4,
    impr: "Calciomercato: Offerte ricevute",
    img: img4,
    link: "/offerte-mercato",
  },
  {
    id: 5,
    impr: "Imprevisti di ingaggio",
    img: img5,
    link: "/ingaggio",
  },
  { id: 6, impr: "Imprevisto sui Rinnovi", img: img6, link: "/rinnovi" },
];

const Home = () => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-around overflow-hidden bg-stone-950 font-bold text-gray-800 md:flex-row">
      {dettagliImprevisti.map((el) => (
        <div
          key={el.id}
          style={{
            boxShadow: "-12px 0px 10px -3px rgba(2,2,2,0.5)",
            zIndex: el.id,
          }}
          className="ease-[cubic-bezier(0.770, 0.000, 0.175, 1.000)] group flex h-full w-1/6 cursor-pointer items-center justify-start transition-all duration-500 hover:w-full hover:text-gray-300"
        >
          <h2
            style={{
              writingMode: "vertical-lr",
              transform: "rotate(180deg)",
              textShadow: "rgb(34, 34, 34) 0px 4px 4px",
            }}
            className="h-full border-[--clr-prim] bg-[rgb(16,84,66,.95)] px-2 ps-8 text-left text-[2.2vw] font-bold uppercase text-gray-200 drop-shadow-lg group-hover:border-l-[1rem]"
          >
            {el.impr}
          </h2>
          <div
            style={{
              backgroundImage: `url(${el.img})`,
              height: "100vh",
            }}
            className="flex h-full w-full items-end justify-end bg-black/20 bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0 "
          >
            <Link
              to={el.link}
              className="block h-full w-full bg-transparent"
            ></Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Home;
