import React, { useState, useEffect } from "react";
import profilePic from "../../assets/profile.jpg";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    document.body.classList.remove("light");
  }, []);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <section className="about" id="aboutme">
      <div className="about-container">
        <div 
          className="about-image"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className="image-wrapper">
            <img 
              src={profilePic} 
              alt="Portrait of Than Seyha" 
              className={hovering ? "hovering" : ""}
            />
            <div className="glow-effect"></div>
          </div>
        </div>
        <div className="about-text">
          <h2>
            <span className="highlight">About</span> Me
          </h2>
          <div className="text-content">
            <p>
              I'm a <span className="highlight">web developer</span> and <span className="highlight">designer</span> with over two years of experience creating and redesigning websites for better functionality and visual appeal. I specialize in front-end development using HTML, CSS, JavaScript, and React, and have built a range of projects including e-commerce platforms, budget trackers, and reservation systems.
            </p>
            <p>
              I also have experience with Node.js, Express, Figma, and other tools. I focus on delivering <span className="highlight">responsive</span>, <span className="highlight">user-friendly</span> websites and can assist with content updates, feature improvements, and complete redesigns tailored to client needs.
            </p>
          </div>

          <Link
            to="/resume"
            className={`read-more-btn ${clicked ? "clicked" : ""}`}
            onClick={handleClick}
          >
            <span>View My Resume</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;