import { Link } from "react-router-dom";
import img1 from "../assets/imgs/img1.jpg";
import img2 from "../assets/imgs/img2.jpg";
import img3 from "../assets/imgs/img3.jpg";
import img4 from "../assets/imgs/img4.jpg";
import img5 from "../assets/imgs/img5.jpg";
import img6 from "../assets/imgs/img6.jpg";

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

const isMobile = window.innerWidth < 768;

const Home = () => {
  return (
    <section
      id="Hero"
      className="flex h-screen w-full select-none flex-col items-center justify-around overflow-hidden bg-stone-950 font-bold text-gray-800 md:flex-row "
    >
      {dettagliImprevisti.map((el) => (
        <div
          key={el.id}
          style={{
            boxShadow: "-12px 0px 10px -3px rgba(2,2,2,0.5)",
            zIndex: el.id,
          }}
          id="Main--Container"
          className="ease-[cubic-bezier(0.770, 0.000, 0.175, 1.000)] group flex h-1/6 w-full cursor-pointer flex-col transition-all duration-500 hover:h-full hover:text-gray-300 md:h-full md:w-1/6 md:flex-row md:items-center md:justify-start md:hover:w-full"
        >
          <h2
            style={
              !isMobile
                ? {
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    textShadow: "rgb(34, 34, 34) 0px 4px 4px",
                  }
                : {
                    textShadow: "rgb(34, 34, 34) 1px 1px 3px",
                  }
            }
            className="border-[--clr-prim] bg-[--clr-sec] px-4 py-1 text-left text-sm font-bold uppercase text-gray-200 drop-shadow-lg group-hover:border-b-[.5rem] md:h-full md:py-0 md:ps-8 md:text-[2.2vw] md:group-hover:border-b-0 md:group-hover:border-l-[1rem]"
          >
            {el.impr}
          </h2>
          <div
            id="img--container"
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
