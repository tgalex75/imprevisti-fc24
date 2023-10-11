import React, { useState } from "react";
import { MdHome, MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleClick = () => {
    setIsOpenMenu((prevMenu) => !prevMenu);
  };

  const dettagliMenu = [
    { id: 1, voceLi: "Home", linkTo: "/" },
    { id: 2, voceLi: "Imprevisto Prepartita", linkTo: "/prepartita" },
    { id: 3, voceLi: "Imprevisto Settimanale", linkTo: "/settimana" },
    {
      id: 4,
      voceLi: "Imprevisto Serie Negativa",
      linkTo: "/serie-negativa",
    },
    {
      id: 5,
      voceLi: "Imprevisto Calciomercato: offerte ricevute",
      linkTo: "/offerte-mercato",
    },
    { id: 6, voceLi: "Imprevisto di Ingaggio", linkTo: "/ingaggio" },
    { id: 7, voceLi: "Imprevisto Rinnovi", linkTo: "/rinnovi" },
    { id: 8, voceLi: "Media Overall ", linkTo: "/calcolo-media" },
    { id: 9, voceLi: "Bonus Annuali ", linkTo: "/bonus-annuali" },
    { id: 10, voceLi: "Regolamento Carriera FC24 ", linkTo: "/regolamento" },
  ];

  //Sostituire div con <Link> from react-router
  const linksMenu = dettagliMenu.map((voce) => {
    return (
      <div key={voce.id}>
        <Link to={voce.linkTo}>
          <motion.li
            whileHover={{ scale: 1.4 }}
            transition={{ type: "spring", stiffness: 200, bounce: 0.6 }}
            className=" py-6 text-xl font-bold uppercase hover:text-[--clr-sec]"
          >
            {voce.voceLi}
          </motion.li>
        </Link>
      </div>
    );
  });

  return (
    <nav className="fixed z-[1000] flex h-auto w-full items-center justify-between px-6 py-3">
      <div className="flex cursor-pointer items-center justify-center rounded-full p-2 hover:bg-gray-300/30">
        <Link to="/">
          <MdHome
            size={36}
            style={
              isOpenMenu
                ? { display: "none" }
                : {
                    filter: "drop-shadow(.25rem .25rem 0.15rem #222)",
                  }
            }
            className="fill-gray-300 hover:fill-gray-200"
          />
        </Link>
      </div>
      <div className="flex cursor-pointer items-center justify-center rounded-full p-2 hover:bg-gray-300/30">
        {!isOpenMenu ? (
          <MdMenu
            size={36}
            style={{
              filter: "drop-shadow(.25rem .25rem 0.15rem #222)",
            }}
            className="fill-gray-300 hover:fill-gray-200"
            onClick={handleClick}
          />
        ) : (
          <MdClose
            size={36}
            className="fill-gray-300 hover:fill-gray-200"
            onClick={handleClick}
          />
        )}
        <ul
          onClick={handleClick}
          className={
            isOpenMenu
              ? "absolute right-0 top-0 z-[-1] flex h-screen w-full flex-col items-center justify-around bg-black/95 px-28 py-20 text-center text-gray-300 transition-[0.5s]"
              : "absolute right-[-100%] top-0 z-[-1] flex h-screen w-full flex-col items-center justify-around bg-black/95 px-28 py-20 text-center text-gray-300 transition-[0.5s]"
          }
        >
          {linksMenu}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
