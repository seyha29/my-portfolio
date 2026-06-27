import React from 'react';
import './Skill.css';

function Skill({ darkMode }) {
  const skills = [
    { 
      name: 'HTML', 
      level: 95,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 17.56L16.07 16.43L16.62 10.33H9.38L9.2 8.3H16.8L17 6H7L7.56 12.61H14.44L14.22 14.93L12 15.51L9.78 14.93L9.64 13.25H7.64L7.93 16.43L12 17.56Z" fill="#E34F26"/>
          <path d="M1 1L3 21L12 24L21 21L23 1H1Z" fill="#E34F26"/>
        </svg>
      )
    },
    { 
      name: 'CSS', 
      level: 90,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 1L3.5 21L12 24L20.5 21L22.5 1H1.5Z" fill="#1572B6"/>
          <path d="M12 22.5L19.1 20.1L20.6 2.5H12V22.5Z" fill="#1572B6"/>
          <path d="M12 9.4H17.5L17.2 12.5H12V15.1L15.1 15.8L15.3 18.3L12 19.3V16.7L12 16.6L8.7 15.8L8.5 13.1H11.1L11.2 14.3L12 14.6V12.5H8.1L7.7 9.4H12Z" fill="white"/>
        </svg>
      )
    },
    { 
      name: 'JavaScript', 
      level: 85,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
          <path d="M7.5 18.5C8 19.5 8.5 20 9.5 20C10.5 20 11 19.5 11 18.5V12H9V18.5C9 18.8 8.8 19 8.5 19C8.2 19 8 18.8 8 18.5L7.5 18.5Z" fill="#000"/>
          <path d="M13 20C14.5 20 15.5 19 15.5 17.5C15.5 16 14.5 15.5 13.5 15L13 14.7C12.5 14.5 12.2 14.2 12.2 13.8C12.2 13.4 12.5 13.2 12.8 13.2C13.2 13.2 13.5 13.4 13.7 13.8L15 13C14.5 12 13.7 11.5 12.8 11.5C11.5 11.5 10.5 12.3 10.5 13.5C10.5 14.8 11.2 15.5 12.5 16L13 16.3C13.5 16.5 13.8 16.8 13.8 17.2C13.8 17.6 13.5 17.8 13 17.8C12.4 17.8 12 17.5 11.8 17L10.5 17.7C10.8 18.7 11.7 19.5 13 19.5V20Z" fill="#000"/>
        </svg>
      )
    },
    { 
      name: 'Bootstrap', 
      level: 88,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2H6Z" fill="#7952B3"/>
          <path d="M8 6H13C14.1 6 15 6.9 15 8C15 8.6 14.7 9.1 14.3 9.5C14.7 9.9 15 10.4 15 11C15 12.1 14.1 13 13 13H8V6ZM10 8V9.5H12.5C12.8 9.5 13 9.3 13 9C13 8.7 12.8 8.5 12.5 8.5H10V8ZM10 10.5V11.5H12.5C12.8 11.5 13 11.3 13 11C13 10.7 12.8 10.5 12.5 10.5H10Z" fill="white"/>
          <path d="M8 15H13C14.7 15 16 16.3 16 18C16 19.7 14.7 21 13 21H8V15ZM10 17V19H13C13.6 19 14 18.6 14 18C14 17.4 13.6 17 13 17H10Z" fill="white"/>
        </svg>
      )
    },
    { 
      name: 'Tailwind', 
      level: 82,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.26 8.69 11.81 9.24 12.41 9.85C13.39 10.85 14.56 12 17 12C19.67 12 21.33 10.67 22 8C21 9.33 19.83 9.83 18.5 9.5C17.74 9.31 17.19 8.76 16.59 8.15C15.61 7.15 14.44 6 12 6ZM7 12C4.33 12 2.67 13.33 2 16C3 14.67 4.17 14.17 5.5 14.5C6.26 14.69 6.81 15.24 7.41 15.85C8.39 16.85 9.56 18 12 18C14.67 18 16.33 16.67 17 14C16 15.33 14.83 15.83 13.5 15.5C12.74 15.31 12.19 14.76 11.59 14.15C10.61 13.15 9.44 12 7 12Z" fill="#06B6D4"/>
        </svg>
      )
    },
    { 
      name: 'React JS', 
      level: 80,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
          <path d="M12 1C16.5 3 21 7.5 21 12C21 16.5 16.5 21 12 23C7.5 21 3 16.5 3 12C3 7.5 7.5 3 12 1Z" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
          <path d="M12 1C7.5 3 3 7.5 3 12C3 16.5 7.5 21 12 23" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
          <path d="M12 23C16.5 21 21 16.5 21 12C21 7.5 16.5 3 12 1" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
        </svg>
      )
    },
    { 
      name: 'PHP', 
      level: 75,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="12" rx="10" ry="6" fill="#777BB4"/>
          <path d="M4.5 10C4.2 10 4 10.2 4 10.5V13.5C4 13.8 4.2 14 4.5 14H5.5C6.3 14 7 13.3 7 12.5V11.5C7 10.7 6.3 10 5.5 10H4.5ZM5.5 11C5.8 11 6 11.2 6 11.5V12.5C6 12.8 5.8 13 5.5 13H5V11H5.5Z" fill="white"/>
          <path d="M8 10V14H9V12.5H10C10.8 12.5 11.5 11.8 11.5 11C11.5 10.2 10.8 9.5 10 9.5H8.5C8.2 9.5 8 9.7 8 10ZM9 10.5H10C10.3 10.5 10.5 10.7 10.5 11C10.5 11.3 10.3 11.5 10 11.5H9V10.5Z" fill="white"/>
          <path d="M13 10V14H14V12.5H15C15.8 12.5 16.5 11.8 16.5 11C16.5 10.2 15.8 9.5 15 9.5H13.5C13.2 9.5 13 9.7 13 10ZM14 10.5H15C15.3 10.5 15.5 10.7 15.5 11C15.5 11.3 15.3 11.5 15 11.5H14V10.5Z" fill="white"/>
        </svg>
      )
    },
    { 
      name: 'Laravel', 
      level: 70,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.038-.027.014-.01.026-.023.041-.031L9.562.715a.37.37 0 01.375 0l9.032 5.16c.016.008.029.021.041.031.013.009.026.017.038.027.013.014.02.03.033.045.008.011.02.02.024.033a.3.3 0 01.023.058c.007.01.014.02.017.032zm-1.707 4.659V6.934L19.15 8.29l-2.91 1.666v3.157l4.695-2.693zm-4.319 7.91v-3.157l-2.844 1.616-6.846 3.887v3.185l9.69-5.531z" fill="#FF2D20"/>
        </svg>
      )
    },
  ];

  return (
    <section className={`skills-section ${darkMode ? 'dark' : ''}`} id="skills">
      <div className="skills-container">
        <h2 className="skills-title">
          <span className="highlight">My</span> Skills
        </h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <div className="skill-info">
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;