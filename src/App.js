import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Prepartita from "./Pages/Prepartita"

function App() {
    return (
        <div className="App">
            <Navbar />
            {/* <Home /> */}
            <Prepartita />

        </div>
    );
}

export default App;
