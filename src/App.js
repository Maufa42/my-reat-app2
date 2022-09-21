import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";


function App() {
  return (
    <div class = "container">
      <Navbar/>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
