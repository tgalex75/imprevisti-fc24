import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../Pages/Home";
import Prepartita from "../Pages/Prepartita";
import Settimana from "../Pages/Settimana";
import Regolamento from "../Pages/Regolamento";
import Rinnovi from "../Pages/Rinnovi";
import Ingaggio from "../Pages/Ingaggio";
import MediaOverall from "../Pages/MediaOverall";
import OfferteMercato from "../Pages/OfferteMercato";
import SerieNegativa from "../Pages/SerieNegativa";
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
                <Route path="/regolamento" element={<Regolamento />} />
                <Route path="/calcolo-media" element={<MediaOverall />} />
                <Route path="/ingaggio" element={<Ingaggio />} />
                <Route path="/rinnovi" element={<Rinnovi />} />
                <Route path="/serie-negativa" element={<SerieNegativa />} />
                <Route path="/offerte-mercato" element={<OfferteMercato />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
