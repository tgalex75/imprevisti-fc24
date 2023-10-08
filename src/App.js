import "./App.css";
//import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Sfondo from "./Components/Sfondo";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <AnimatedRoutes />
            </Router>
            <Footer />
            <Sfondo />
        </>
    );
}

export default App;
