import React, { useEffect, useState } from "react";
import { FaGithub, FaFacebook, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import profilePic from "../../assets/profile1.jpg";
import "./Hero.css";

function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showFloatingElements, setShowFloatingElements] = useState(false);

  const textOptions = [
    "I'm a Web Developer",
    "I'm a React Specialist",
    "I'm a UI/UX Enthusiast",
    "I'm a Problem Solver"
  ];

  useEffect(() => {
    // Show floating elements after a delay for performance
    const floatTimer = setTimeout(() => {
      setShowFloatingElements(true);
    }, 1000);

    return () => clearTimeout(floatTimer);
  }, []);

  useEffect(() => {
    const currentFullText = textOptions[currentTextIndex];
    
    const handleTyping = () => {
      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at full text
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => 
          (prevIndex + 1) % textOptions.length
        );
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, currentTextIndex, isDeleting, textOptions, typingSpeed]);

  // Generate floating elements for background
  const renderFloatingElements = () => {
    if (!showFloatingElements) return null;
    
    const elements = [];
    for (let i = 0; i < 8; i++) {
      const size = Math.random() * 20 + 10;
      const duration = Math.random() * 20 + 15;
      const delay = Math.random() * 5;
      const left = Math.random() * 100;
      const opacity = Math.random() * 0.3 + 0.1;
      
      elements.push(
        <div 
          key={i}
          className="floating-element"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: '100%',
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            opacity: opacity
          }}
        />
      );
    }
    return elements;
  };

  return (
    <section className="hero" id="home">
      <div className="floating-elements">
        {renderFloatingElements()}
      </div>
      
      <div className="hero-text">
        <h3>
          Hey, I'm <span className="highlight">Than Seyha</span>
        </h3>
        <h1>
          <span className="typed-text">{currentText}</span>
        </h1>
        <p>
          Freelance web developer skilled in modern JavaScript frameworks. 
          I create responsive, accessible, and performant web applications 
          with clean code and intuitive user experiences.
        </p>
        <div className="social-icons">
          <a 
            href="https://github.com/seyha29" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.facebook.com/than.seyha.9235/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a 
            href="https://t.me/thanseyha11" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <FaTelegramPlane />
          </a>
          <a 
            href="https://www.linkedin.com/in/thanseyha/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      
      <div className="hero-image">
        <img 
          src={profilePic} 
          alt="Than Seyha" 
          loading="lazy" 
          width="280" 
          height="280"
        />
      </div>
    </section>
  );
}

export default Hero;