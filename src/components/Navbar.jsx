import React, { useState } from 'react';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

const Navbar = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);

  const navigate = (id) => (e) => {
    if (e) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const hash = id ? `#${id}` : '';
      window.location.href = `/${hash}`;
    }
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Portfolio<span>.</span></h2>
      </div>

      <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen(o => !o)}>
        <span className="nav-toggle-icon">{open ? '✕' : '☰'}</span>
      </button>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li><a href="#home" onClick={navigate('home')} className="active">Home</a></li>
        <li><a href="#about" onClick={navigate('about')}>About</a></li>
        <li><a href="#projects" onClick={navigate('projects')}>Projects</a></li>
        <li><a href="#skills" onClick={navigate('skills')}>Skills</a></li>
        <li><a href="#contact" onClick={navigate('contact')}>Contact</a></li>
      </ul>

      <div className="nav-actions">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <BsMoonStarsFill /> : <BsSunFill />}
        </button>
        <button className="btn btn-primary" onClick={navigate('contact')}>Hire Me</button>
      </div>
    </nav>
  );
};

export default Navbar;
