import React from "react";
import Certificate from "./Certificate";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "University IU CAM",
      description: "A responsive university website built with React and CSS modules featuring modern UI components and smooth animations.",
      image: "/assets/projects/project1.jpg",
      link: "https://seyha29.github.io/my-react-website/",
      tags: ["React", "CSS Modules", "Responsive"]
    },
    {
      title: "Portfolio Website",
      description: "Professional portfolio showcasing my projects and skills with responsive design and interactive elements.",
      image: "/assets/projects/project2.jpg",
      link: "https://seyha29-my-portfolio.vercel.app/",
      tags: ["React", "CSS", "Responsive Design"]
    },
    {
      title: "Laravel E-Commerce",
      description: "Full-featured e-commerce platform built with Laravel featuring product management and payment processing.",
      image: "/assets/projects/project3.jpg",
      link: "https://your-booking-platform.com",
      tags: ["Laravel", "MySQL", "Payment Integration"]
    },
    {
      title: "React E-Commerce Store",
      description: "Modern e-commerce application built with React  featuring shopping cart, user authentication, and Stripe payment integration,translation khmer and English, download reciept.",
      image: "/assets/projects/p4.jpg",
      link: "https://seyha29.github.io/ecomerces_react_js/",
      tags: ["React"]
    }
  ];

  const certificates = [
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "April 27, 2025",
      link: "https://drive.google.com/file/d/167TJCCbPVYB8vAECvkFgJrXN1zyxl_oA/view?usp=sharing",
      image: "/assets/certificates/aws.jpg",
      skills: ["Cloud Computing", "AWS Services", "Security Fundamentals"]
    },
    {
      title: "Fortinet Network Security Associate",
      issuer: "Fortinet",
      date: "June 15, 2025",
      link: "https://drive.google.com/file/d/16F9uzdxm8PCtkIme2w0QAImxY3N0bXQh/view?usp=sharing",
      image: "/assets/certificates/fortinet.jpg",
      skills: ["Network Security", "Firewalls", "Threat Protection"]
    }
  ];

  return (
    <section className="projects" id="projects">
      {/* Projects Section */}
      <div className="section-header">
        <h2 className="section-title">
          <span className="highlight">Web</span> Projects
        </h2>
        <p className="section-subtitle">Here are some of my recent works</p>
      </div>
      
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-image-link"
            >
              <div className="image-container">
                <img 
                  src={process.env.PUBLIC_URL + project.image} 
                  alt={project.title} 
                  className="project-image"
                  loading="lazy"
                />
                <div className="overlay">
                  <span className="view-text">View Project</span>
                </div>
              </div>
            </a>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit Project →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Certificates Section */}
      <div className="section-header" style={{ marginTop: "4rem" }}>
        <h2 className="section-title">
          <span className="highlight">My</span> Certificates
        </h2>
        <p className="section-subtitle">Industry-recognized certifications</p>
      </div>
      
      <div className="certificates-container">
        {certificates.map((cert, index) => (
          <Certificate
            key={index}
            title={cert.title}
            issuer={cert.issuer}
            date={cert.date}
            link={cert.link}
            image={process.env.PUBLIC_URL + cert.image}
            skills={cert.skills}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;