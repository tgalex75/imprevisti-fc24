import React from "react";
//import logoSfondoFalco from "../assets/imgs/logo900.png";
import logo from "../assets/imgs/logo.png";

const Sfondo = () => {
  return (
    <section className="absolute left-1/2 top-1/2 opacity-5 -z-50 h-screen w-screen -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-transparent">
<div className="h-full w-full" style={{
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${logo})`,
    }}></div>
    </section>
  );
};

export default Sfondo;
