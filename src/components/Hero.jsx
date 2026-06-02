import React from 'react';
import { FaInstagram, FaTiktok, FaGithub, FaYoutube, FaDownload, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const handleDownload = () => {
    // Try to open resume.pdf in the public folder. Add a resume.pdf to /public to enable download.
    window.open('/resume.pdf', '_blank');
  };

  const handleContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
      
        <h1 className="hero-title">
          Hi, I'm <span>Bishma j Litton </span>
        </h1>
        <p className="hero-description">
     I am second-year B.Sc. student at Scott Christian College and an aspiring Full Stack Developer. Currently pursuing a Full Stack Development Internship, I am passionate about building modern web applications, learning new technologies, and creating meaningful digital experiences.

        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={handleDownload}>
            <FaDownload /> Download CV
          </button>
          <button className="btn btn-outline" onClick={handleContact}>
            <FaEnvelope /> Contact Me
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/hero.png" alt="OualiCode 3D Avatar" />
      </div>
    </section>
  );
};

export default Hero;
