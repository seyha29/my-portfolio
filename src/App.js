import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Resume from "./pages/Resume";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <Router>
      <ScrollToTop offset={70} />
      <div className="App">
        <Navbar
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skill darkMode={darkMode} />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;