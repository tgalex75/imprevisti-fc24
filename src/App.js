import "./App.css";
//import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <AnimatedRoutes />
            </Router>
        </>
    );
}

export default App;
