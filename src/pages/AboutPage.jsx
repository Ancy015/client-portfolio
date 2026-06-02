import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <div className="app-container">
      <div className="glass-container">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
      </div>
      <main style={{padding: '24px'}}>
        <About />

        <section className="about-explore" style={{marginTop: 24}}>
          <div className="about-explore-inner glass" style={{padding: 24}}>
            <h2>Explore — More About Me</h2>

            <p>
              I am passionate about technology and enjoy learning new concepts and exploring
              opportunities that help me grow both personally and professionally. I approach
              problems with a positive, curious mindset and focus on building practical skills
              through hands-on work and collaboration.
            </p>

            <p>
              I value creativity, clear communication, and continuous learning. I'm eager to
              embrace challenges, work with teams, and contribute meaningfully to projects that
              solve real problems.
            </p>

            <p>
              My ongoing goal is to expand my knowledge, strengthen my skills, and deliver
              work that adds value. I remain committed to growth, innovation, and creating a
              positive impact through dedication and thoughtful engineering.
            </p>

            <h3 style={{marginTop: 12}}>Quick bullets</h3>
            <ul className="about-explore-list">
              <li><strong>Education:</strong> B.Sc — scott christian college — 2nd </li>
              <li><strong>Internships:</strong> Full Stack Development Intern </li>
              <li><strong>Technologies:</strong> HTML, CSS, JavaScript, React, Responsive ui </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
