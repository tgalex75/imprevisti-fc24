import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Sfondo from "./Components/Sfondo";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import { useEffect, useState } from "react";
import { MdScreenRotation } from "react-icons/md";
import { motion } from "framer-motion";
import spiaze from "./assets/imgs/spiaze.png";

function App() {
  const isMobile = window.innerWidth < window.innerHeight || window.innerWidth < 768;
  const [disclaimer, setDisclaimer] = useState(isMobile);

  useEffect(() => {
    setDisclaimer(!disclaimer);
  }, [disclaimer]);

  return isMobile ? (
    <div
      style={{ backgroundImage: `url(${spiaze})`, backgroundSize: "cover" }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-screen w-full flex-col items-center justify-center gap-8 bg-opacity-40 bg-bottom bg-no-repeat text-center"
    >
      <div className="fixed h-full w-full bg-black/80 opacity-90"></div>
      <h1 className="text-4xl z-10">Spiaze ragassi..</h1>
      <h3 className="text-xl z-10">
        ... ma questa App al momento non è ottimizzata per dispositivi mobili
      </h3>
      {!isMobile && <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: -45 }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <MdScreenRotation size={"4rem"} />
      </motion.div>}
    </div>
  ) : (
    <main className="h-screen w-screen overflow-hidden">
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
      <Footer />
      <Sfondo />
    </main>
  );
}

export default App;
