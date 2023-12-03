import { NavBar } from "./Components/NavBar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Contact, Home, About, Services } from "./Components/Pages";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
