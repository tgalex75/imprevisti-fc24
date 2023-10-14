//import { color } from "framer-motion";
import React from "react";

const Footer = (props) => {

  return (
    <footer id="Footer" className="z-10 fixed bottom-0 right-0 text-sm flex w-full items-center justify-center md:justify-between">
      <small className=" md:ps-4 opacity-70 md:opacity-50">
        coded by tgalex75 - Falconero Community - beta version
      </small>
      <small
        className="pe-4 italic hidden md:inline text-xl md:text-yellow-400 md:font-bold"
      >
        Community Edition
      </small>
    </footer>
  );
};

export default Footer;
