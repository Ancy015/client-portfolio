import React from 'react';

const skillsData = [
  { name: 'Html', percentage: '90%', icon: 'https://i.pinimg.com/1200x/0b/6d/14/0b6d14f0e2ffd8a196ffb00902c688b8.jpg' },
  { name: 'Css', percentage: '80%', icon: 'https://i.pinimg.com/1200x/66/6e/fc/666efcf2b1d193b39cafd3afa01e3171.jpg' },
  { name: 'JavaScript', percentage: '70%', icon: 'https://i.pinimg.com/1200x/b6/ab/52/b6ab52333dd3effe49adf85e8179155a.jpg' },
  { name: 'React', percentage: '55%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'responsive ui', percentage: '90%', icon: 'https://i.pinimg.com/736x/6d/77/2d/6d772d226e283ba78d73796185a417b2.jpg' },
  { name: 'java', percentage: '60%', icon: ' https://i.pinimg.com/736x/e5/2f/dc/e52fdce441555eca1d3b208a8ddd725b.jpg' },
  { name: 'Python', percentage: '75%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Vite', percentage: '80%', icon: 'https://i.pinimg.com/736x/43/b5/f8/43b5f8aba9dddafdd81da6a4f58dd0ac.jpg' },
];

// Placeholder for Framer Motion since it doesn't have a reliable CDN link in devicon, using a framer-like icon or generic image
// Actually, let's use standard images for icons if possible, or devicon links.
const Skills = () => {
  return (
    <section className="skills section glass" id="skills">
      <h2 className="section-title">My Skills</h2>
      <p className="section-subtitle">Technologies and tools I work with to create amazing web experiences</p>
      
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <div className="skill-info">
                {skill.isImage ? (
                  <img src={skill.icon} alt={skill.name} className="skill-icon" style={{width: 20, filter: 'invert(1)'}} />
                ) : (
                  <img src={skill.icon} alt={skill.name} className="skill-icon" style={{width: 20}} />
                )}
                <span>{skill.name}</span>
              </div>
            </div>
            <div className="skill-progress-container">
              <div className="skill-labels">
                <span className="proficiency">Proficiency</span>
                <span className="percentage">{skill.percentage}</span>
              </div>
              <div className="progress-bar">
                <div 
                  className={`progress-fill color-${index % 4}`} 
                  style={{ width: skill.percentage }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
