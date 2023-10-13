//import { color } from "framer-motion";
import React from "react";

const Footer = (props) => {

  return (
    <footer id="Footer" className="absolute bottom-0 right-0 md:m-1 text-sm flex w-full items-center justify-center md:justify-between">
      <small className="z-10 md:ps-4 opacity-70 md:opacity-50">
        coded by tgalex75 - Falconero Community - beta version
      </small>
      <small
        className="z-10 pe-4 italic hidden md:inline text-xl md:text-yellow-400 md:font-bold"
      >
        Community Edition
      </small>
    </footer>
  );
};

export default Footer;
