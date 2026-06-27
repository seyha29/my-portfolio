import React from "react";
import "./Certificate.css";

const Certificate = ({ title, issuer, date, link, image, skills }) => {
  return (
    <div className="certificate-card">
      <div className="certificate-image-container">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} className="certificate-image" />
        </a>
      </div>
      <div className="certificate-details">
        <h3 className="certificate-title">{title}</h3>
        <p className="certificate-issuer">Issued by: {issuer}</p>
        <p className="certificate-date">Completed: {date}</p>
        <div className="certificate-skills">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
        <a
          href={link}
          className="view-certificate-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
      </div>
    </div>
  );
};

export default Certificate;