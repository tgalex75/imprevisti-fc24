import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../Pages/Home";
import Prepartita from "../Pages/Prepartita";
import Settimana from "../Pages/Settimana";
import EditorImprevisti from "../Pages/EditorImprevisti";
import Rinnovi from "../Pages/Rinnovi";
import Ingaggio from "../Pages/Ingaggio";
import MediaOverall from "../Pages/MediaOverall";
import OfferteMercato from "../Pages/OfferteMercato";
import SerieNegativa from "../Pages/SerieNegativa";
import BonusAnnuali from "../Pages/BonusAnnuali";
// import Dashboard from "../Pages/Auth/Dashboard";
// import Login from "../Pages/Auth/Login";
// import Signup from "../Pages/Auth/Signup";
import ErrorPage from "../Pages/ErrorPage";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/prepartita" element={<Prepartita />} />
        <Route path="/settimana" element={<Settimana />} />
        <Route path="/editor-imprevisti" element={<EditorImprevisti />} />
        <Route path="/calcolo-media" element={<MediaOverall />} />
        <Route path="/ingaggio" element={<Ingaggio />} />
        <Route path="/rinnovi" element={<Rinnovi />} />
        <Route path="/serie-negativa" element={<SerieNegativa />} />
        <Route path="/offerte-mercato" element={<OfferteMercato />} />
        <Route path="/bonus-annuali" element={<BonusAnnuali />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
