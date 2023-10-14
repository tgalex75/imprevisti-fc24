import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Sfondo from "./Components/Sfondo";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";

function App() {
  return (
    <main className="h-screen w-full">
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
