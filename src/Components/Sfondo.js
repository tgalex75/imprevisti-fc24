import React from "react";
//import logoSfondoFalco from "../assets/imgs/logo900.png";
import logo900 from "../assets/imgs/logo900.png";

const Sfondo = () => {
  return (
    <section className="absolute left-1/2 top-1/2 invert opacity-10 -z-50 h-screen w-screen -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-transparent">
<div className="h-full w-full" style={{
      backgroundPositionX: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${logo900})`,
    }}></div>
    </section>
  );
};

export default Sfondo;
