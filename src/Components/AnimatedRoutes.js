import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../Pages/Home";
import Prepartita from "../Pages/Prepartita";
import Settimana from "../Pages/Settimana";
import RegistroRiepilogo from "../Pages/RegistroRiepilogo";
//import RiepilogoImprevisti from "../Pages/RiepilogoImprevisti";
import IngaggiMercatoRinnovi from "../Pages/IngaggiMercatoRinnovi";
import MediaOverall from "../Pages/MediaOverall";
import SerieNegativa from "../Pages/SerieNegativa";
import EditorImprevisti from "../Pages/EditorImprevisti";
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
                <Route path="/registro-giocatori" element={<RegistroRiepilogo />} />
                <Route path="/editor-imprevisti" element={<EditorImprevisti />} />
                {/* <Route path="/riepilogo-imprevisti" element={<RiepilogoImprevisti />} /> */}
                <Route path="/calcolo-media" element={<MediaOverall />} />
                <Route path="/ingaggio" element={<IngaggiMercatoRinnovi tipoImprevisto="Ingaggio" />} />
                <Route path="/rinnovi" element={<IngaggiMercatoRinnovi tipoImprevisto="Rinnovi" />} />
                <Route path="/serie-negativa" element={<SerieNegativa />} />
                <Route path="/offerte-mercato" element={<IngaggiMercatoRinnovi tipoImprevisto="Mercato" />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
