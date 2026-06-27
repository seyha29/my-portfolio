import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="resume-container">

        <div className="top-section">
          <div className="profile-image-container">
            <img
              src="/assets/profile1.jpg"
              alt="Than Seyha Profile"
              className="profile-image"
            />
          </div>

          <div className="divider"></div>

          <div className="name-title">
            <h1 className="name">Than Seyha</h1>
            <h2 className="title">Software Developer</h2>
          </div>
        </div>

        <section className="summary">
          <h3>My Summary</h3>
          <p>
            I am a recent Computer Science graduate passionate about technology and software development.
            Skilled in programming, problem-solving, and eager to contribute through internships and projects.
            Motivated and ready to grow in a dynamic tech environment.
          </p>
        </section>

        <section className="details">
          <div className="detail-section">
            <h3>Education</h3>
            <ul>
              <li>
                <strong>Bachelor’s Degree in Computer Science</strong><br />
                Royal University Of Phnom Penh, Graduated 2025
              </li>
              <li>
                <strong>Diploma General Education</strong><br />
                Hun Sen Sandek High School, Graduated 2021
              </li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>Skills</h3>
            <ul>
              <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind</li>
              <li><strong>Backend:</strong> PHP, Laravel</li>
              <li><strong>Tools & Technologies:</strong> Git, GitHub, REST APIs, MySQL, Responsive Web Design</li>
              <li><strong>Research:</strong> Google, AI</li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>Languages</h3>
            <ul>
              <li>Khmer (Native)</li>
              <li>English (Medium)</li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>Contact</h3>
            <ul>
              <li>Email: <a href="mailto:thanseyha2002@gmail.com">thanseyha2002@gmail.com</a></li>
              <li>Phone: +855 186323203</li>
              <li>GitHub: <a href="https://github.com/seyha29" target="_blank" rel="noopener noreferrer">seyha29</a></li>
              <li>LinkedIn: <a href="https://linkedin.com/in/thanseyha" target="_blank" rel="noopener noreferrer">thanseyha</a></li>
              <li>Telegram: @thanseyha11</li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>Personal Info</h3>
            <ul>
              <li>Gender: Male</li>
              <li>Date of Birth: 03 August 2002</li>
              <li>Age: 23 years old</li>
              <li>Address: Phnom Penh, Cambodia</li>
            </ul>
          </div>
        </section>

        <div className="download-btn-container">
          <a
            href="/assets/Resume.pdf"
            className="resume-download"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
