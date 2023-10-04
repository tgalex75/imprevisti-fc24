import "./App.css";
//import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
//import Prepartita from "./Pages/Prepartita"
//import ImprevistoCommunity from "./Components/ImprevistoCommunity";
import SerieNegativa from "./Pages/SerieNegativa";
//import Ingaggio from "./Pages/Ingaggio";
import RiepilogoImprevisti from "./Components/RiepilogoImprevisti";

function App() {
    return (
        <div className="App">
            <Navbar />
            {/* <Home /> */}
            {/* <Prepartita /> */}
            <SerieNegativa />
            {/* <Ingaggio /> */}
            {/* <RiepilogoImprevisti /> */}



        </div>
    );
}

export default App;
