import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaSun, FaMoon, FaHome, FaUser, FaStar, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

function Navbar({ toggleDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(darkMode);

  // Toggle mobile menu
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Close menu when clicking backdrop
  const handleBackdropClick = () => {
    setMenuOpen(false);
  };

  // Handle dark mode toggle
  const handleDarkModeToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Update body class
    if (newDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    
    // Call parent toggle if provided
    if (toggleDarkMode) {
      toggleDarkMode();
    }
  };

  // Sync dark mode state when prop changes
  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  // Scroll effect for navbar shadow
  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
      }, 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  // Add/remove menu-open class on body
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  // Track desktop vs mobile, close menu on breakpoint, and manage focus/escape
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth > 1024 : true);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth > 1024;
      setIsDesktop(desktop);
      if (desktop) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    // run once on mount to set initial state
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Manage focus when mobile menu opens/closes
  useEffect(() => {
    if (menuOpen) {
      // focus first link when menu opens
      setTimeout(() => {
        const firstLink = document.querySelector('.nav-links li a');
        if (firstLink) firstLink.focus();
      }, 150);
    } else {
      if (menuButtonRef.current) menuButtonRef.current.focus();
    }
  }, [menuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const navigationItems = [
    { id: "home", label: "Home", icon: FaHome, href: "/#home" },
    { id: "aboutme", label: "About Me", icon: FaUser, href: "/#aboutme" },
    { id: "skills", label: "Skills", icon: FaStar, href: "/#skills" },
    { id: "projects", label: "Projects", icon: FaProjectDiagram, href: "/#projects" },
    { id: "contact", label: "Contact", icon: FaEnvelope, href: "/#contact" },
  ];

  return (
    <>
      <nav
        className={`navbar ${isScrolled ? "scrolled" : ""}`}
        aria-label="Main navigation"
      >
        <div className="navbar-container">
          {/* Logo & Dark Mode Toggle */}
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
              className={`darkmode-toggle ${isDarkMode ? "dark" : ""}`}
              onClick={handleDarkModeToggle}
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
              type="button"
            >
              <div className="toggle-track">
                <div className="toggle-bg"></div>
                <div className="toggle-thumb">
                  {isDarkMode ? (
                    <FaMoon className="toggle-logo-img" />
                  ) : (
                    <FaSun className="toggle-logo-img" />
                  )}
                </div>
                <div className="stars">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className={`star star-${i + 1}`} />
                  ))}
                </div>
              </div>
            </button>
          </div>

          {/* Navigation Links */}
          <ul
            className={`nav-links ${menuOpen ? "active" : ""}`}
            id="main-navigation"
            role="navigation"
            aria-hidden={!(menuOpen || isDesktop)}
          >
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.id}>
                  <HashLink
                    smooth
                    to={item.href}
                    onClick={handleLinkClick}
                    // Only enable tabIndex on desktop when menu is closed
                    tabIndex={menuOpen || isDesktop ? 0 : -1}
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    <IconComponent className="nav-icon" />
                    <span>{item.label}</span>
                  </HashLink>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <div className="nav-icons">
            <button
              ref={menuButtonRef}
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

        {/* Screen reader announcement for dark mode */}
        <div aria-live="polite" className="sr-only">
          {darkMode ? "Dark mode enabled" : "Light mode enabled"}
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`mobile-menu-backdrop ${menuOpen ? "active" : ""}`}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />
    </>
  );
}

export default Navbar;