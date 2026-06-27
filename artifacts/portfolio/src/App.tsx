import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// @ts-ignore
import Navbar from "./components/Navbar/Navbar";
// @ts-ignore
import Hero from "./components/Hero/Hero";
// @ts-ignore
import About from "./components/About/About";
// @ts-ignore
import Skill from "./components/Skill/Skill";
// @ts-ignore
import Projects from "./components/Projects/Projects";
// @ts-ignore
import Contact from "./components/Contact/Contact";
// @ts-ignore
import Footer from "./components/Footer/Footer";
// @ts-ignore
import Resume from "./pages/Resume";
// @ts-ignore
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const stored = localStorage.getItem("darkMode");
      if (stored !== null) return stored === "true";
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch (e) {
      return true;
    }
  });

  useEffect(() => {
    if (darkMode) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
    try { localStorage.setItem("darkMode", String(darkMode)); } catch (e) {}
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev: boolean) => !prev);

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
