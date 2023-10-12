import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Sfondo from "./Components/Sfondo";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import { useEffect, useState } from "react";

function App() {
  const isMobile = window.innerWidth < 768
  const [disclaimer, setDisclaimer] = useState(isMobile)

  useEffect(()=> {
    setDisclaimer(!disclaimer)
  },[disclaimer])

  return (
    isMobile ?
    <div className="flex flex-col w-full h-screen items-center justify-center gap-8">
      <h1 className="text-4xl">Spiaze...</h1>
      <h3 className="text-xl">Questa App al momento non è ottimizzata per dispositivi mobili</h3>
      <img
    </div>
    :
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
