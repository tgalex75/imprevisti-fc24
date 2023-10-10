import { color } from "framer-motion";
import React from "react";

const Footer = (props) => {
  const { session } = props;

  console.log(session);
  return (
    <div className="absolute bottom-0 right-0 m-1 flex w-full justify-start">
     {/*  <small
        className="z-10 pe-4 opacity-20"
        style={session ? { color: "green" } : { color: "red" }}
      >
        {session ? "logged in" : "not logged"}
      </small> */}
      <small className="z-10 ps-4 opacity-20">
        coded by tgalex75 - Falconero Community - beta version
      </small>
    </div>
  );
};

export default Footer;
