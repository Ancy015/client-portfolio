import React from 'react';

const About = () => {
  return (
    <section className="about section glass" id="about">
      <div className="about-content">
        <div className="about-image">
          <img src="/about.png" alt="About Me Avatar" />
        </div>
        <div className="about-text">
          <h2 className="section-title text-left">About Me</h2>
          <p>
          I enjoy exploring new technologies, solving problems, and turning ideas into meaningful digital experiences. I am committed to continuous learning and personal growth, always striving to improve my skills and take on new challenges.

          </p>
          
          <div className="stats">
            <div className="stat-item">
              <h3>2nd year</h3>
              <p>B.Sc<br/>Student</p>
            </div>
            <div className="stat-item">
              <h3>full stack</h3>
              <p>DEvelopment Intern</p>
            </div>
            <div className="stat-item">
              <h3>Passionate</h3>
              <p>About Learning</p>
            </div>
          </div>
          
          <div style={{display: 'flex', gap: 8, marginTop: 20}}>
            <button className="btn btn-primary" onClick={() => {
              // Open a standalone about page that uses the same UI/theme
              window.open('/about-page', '_blank');
            }}>Explore</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
