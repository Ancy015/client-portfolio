import React from 'react';

const projectsData = [
  
  
  {
    title: 'Personal Portfolio Website',
    desc: 'Designed and developed a responsive portfolio website to showcase skills, education, and career goals.',
    tags: ['React', 'CSS', 'JavaScript'],
    image: 'https://i.pinimg.com/736x/45/1c/97/451c9789f59bf2d484b8b29ae4e19ac7.jpg'
  },
  {
    title: 'Student Management System',
    desc: 'Created a web-based system for managing student information, attendance, and academic records.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'https://i.pinimg.com/1200x/0e/43/06/0e43062e34c6f625e23d084fb9c7520c.jpg'
  },
  {
    title: 'E-Commerce Website UI',
    desc: 'Built a modern and responsive online shopping interface with product listings and cart functionality.',
    tags: ['React', 'Bootstrap', 'JavaScript'],
    image: 'https://i.pinimg.com/736x/61/a5/aa/61a5aa44fd5a64c3a9bc5408b2a1e300.jpg'
  },
  {
    title: 'Task Management App',
    desc: 'Developed a task management application to organize daily activities and improve productivity.',
    tags: ['React', 'Firebase', 'CSS'],
    image: 'https://i.pinimg.com/1200x/bd/7d/a0/bd7da0a8bf5a73407a1ceebb878a6f32.jpg'
  },
  {
    title: 'Weather Forecast App',
    desc: 'Created a weather application that displays current weather conditions using API integration.',
    tags: ['JavaScript', 'API', 'HTML'],
    image: 'https://i.pinimg.com/1200x/6b/fc/ec/6bfcece1da8bb25a6d6c0a7ad5511d6d.jpg'
  },
  {
    title: 'Online Learning Platform',
    desc: 'Designed an educational platform interface for browsing courses and tracking learning progress.',
    tags: ['React', 'UI/UX', 'CSS'],
    image: 'https://i.pinimg.com/736x/87/2c/61/872c61df3e75fafaf50b2abfdeb7cc0a.jpg'
  }
];

const Projects = () => {
  return (
    <section className="projects section glass" id="projects">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">A showcase of my recent work</p>
      
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card glass" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
              {/* Removed Code/Demo buttons per request */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
