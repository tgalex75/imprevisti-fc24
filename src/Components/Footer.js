//import { color } from "framer-motion";
import React from "react";

const Footer = (props) => {

  return (
    <div className="absolute bottom-0 right-0 m-1 flex w-full items-center justify-between">
      <small className="z-10 ps-4 opacity-50">
        coded by tgalex75 - Falconero Community - beta version
      </small>
      <small
        className="z-10 pe-4 italic text-xl"
      >
        Community Edition
      </small>
    </div>
  );
};

export default Footer;
