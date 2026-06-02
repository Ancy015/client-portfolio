import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // If the app is opened with a hash (e.g. /#projects), scroll to that section after mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      // wait a tick for elements to render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app-container">
      <div className="glass-container">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
      </div>
      <div className="content-grid">
        <About />
        <Skills />
      </div>
      <div className="projects-container">
        <Projects />
      </div>
      <div className="contact-container">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
