import React, { useState, useEffect } from "react";
import { MdHome, MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

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
        { id: 9, voceLi: "Regolamento Carriera FC24 ", linkTo: "/regolamento" },
    ];

    //Sostituire div con <Link> from react-router
    const linksMenu = dettagliMenu.map((voce) => {
        return (
            <div key={voce.id}>
                <Link to={voce.linkTo}>
                    <li className="hover:text-yellow-600 py-6 text-xl font-bold uppercase">
                        {voce.voceLi}
                    </li>
                </Link>
            </div>
        );
    });

    return (
        <nav className="w-full h-auto py-3 px-6 fixed flex items-center justify-between z-[1000]">
            <div className="cursor-pointer flex items-center justify-center rounded-full p-2 hover:bg-black/30">
                <Link to="/">
                    <MdHome
                        size={36}
                        style={{
                            filter: "drop-shadow(.25rem .25rem 0.15rem #222)",
                        }}
                        className="fill-gray-300 hover:fill-gray-200"
                    />
                </Link>
            </div>
            <div className="cursor-pointer flex items-center justify-center rounded-full p-2 hover:bg-black/30">
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
                            ? "h-screen w-full absolute top-0 right-0 text-center flex flex-col justify-around items-center bg-black/95 text-gray-300 z-[-1] transition-[0.5s] py-20 px-28"
                            : "h-screen w-full absolute top-0 right-[-100%] text-center flex flex-col justify-around items-center bg-black/95 text-gray-300 z-[-1] transition-[0.5s] py-20 px-28"
                    }
                >
                    {linksMenu}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
