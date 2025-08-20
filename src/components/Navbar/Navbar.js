import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon, FaHome, FaUser, FaStar, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

function Navbar({ toggleDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu on link click
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Handle dark mode toggle with animation
  const handleDarkModeToggle = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      toggleDarkMode();
      setTimeout(() => setIsAnimating(false), 600); // Matches CSS animation duration
    }
  };

  // Handle scroll effect for navbar with debouncing
  useEffect(() => {
    const debounce = (func, wait) => {
      let timeout;
      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
      };
    };
    const handleScroll = debounce(() => {
      setIsScrolled(window.scrollY > 50);
    }, 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Manage body class for menu open state
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  // Manage body class for dark mode
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation items (Home restored)
  const navigationItems = [
    { id: "home", label: "Home", icon: FaHome, href: "/#home" },
    { id: "aboutme", label: "About Me", icon: FaUser, href: "/#aboutme" },
    { id: "skills", label: "Skills", icon: FaStar, href: "/#skills" },
    { id: "projects", label: "Projects", icon: FaProjectDiagram, href: "/#projects" },
    { id: "contact", label: "Contact", icon: FaEnvelope, href: "/#contact" },
  ];

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${darkMode ? "dark" : ""}`}
      aria-label="Main navigation"
    >
      <div className="navbar-container">
        <div className="logo-and-toggle">
          <h1 className="logo">
            <HashLink
              smooth
              to="/#home"
              onClick={handleLinkClick}
              aria-label="Than Seyha - Go to home"
            >
              Than <span className="highlight">Seyha</span>
            </HashLink>
          </h1>
          <button
            className={`darkmode-toggle ${darkMode ? "dark" : ""} ${isAnimating ? "animating" : ""}`}
            onClick={handleDarkModeToggle}
            aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
            type="button"
          >
            <div className="toggle-track">
              <div className="toggle-bg"></div>
              <div className="toggle-thumb">
                {darkMode ? <FaMoon className="toggle-logo-img" /> : <FaSun className="toggle-logo-img" />}
              </div>
              <div className="stars">
                {[...Array(3)].map((_, i) => (
                  <div key={`star-${i}`} className="star" />
                ))}
              </div>
            </div>
          </button>
        </div>

        <ul
          className={`nav-links ${menuOpen ? "active" : ""}`}
          id="main-navigation"
          role="navigation"
        >
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.id} onClick={handleLinkClick}>
                <HashLink
                  smooth
                  to={item.href}
                  tabIndex={menuOpen || window.innerWidth > 1024 ? 0 : -1}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  <IconComponent className="nav-icon" />
                  {item.label}
                </HashLink>
              </li>
            );
          })}
        </ul>

        <div className="nav-icons">
          <button
            className="menu-icon"
            onClick={handleMenuToggle}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            type="button"
          >
            {menuOpen ? (
              <FaTimes className="icon menu-toggle-icon" />
            ) : (
              <FaBars className="icon menu-toggle-icon" />
            )}
          </button>
        </div>
      </div>
      <div aria-live="polite" className="sr-only">
        {darkMode ? "Dark mode enabled" : "Light mode enabled"}
      </div>
    </nav>
  );
}

export default Navbar;