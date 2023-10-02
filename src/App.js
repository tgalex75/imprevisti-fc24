import "./App.css";
//import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
//import Prepartita from "./Pages/Prepartita"
//import ImprevistoCommunity from "./Components/ImprevistoCommunity";
import SerieNegativa from "./Pages/SerieNegativa";

function App() {
    return (
        <div className="App">
            <Navbar />
            {/* <Home /> */}
            {/* <Prepartita /> */}
            <SerieNegativa />


        </div>
    );
}

export default App;
