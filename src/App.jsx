import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Navbar from "./component/Navbar.jsx";
import Hero from "./component/Hero.jsx";
import Intro from "./component/Intro.jsx";
import Projects from "./component/Projects.jsx";
import Contact from "./component/Contact.jsx";
import ContactCard from "./component/ContactCard.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-[#E7E7DE] font-sans min-h-screen min-w-min">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/introduction" element={<Intro />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
