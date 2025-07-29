// components/Developer.jsx
import React from 'react';
import './Developer.css';

const Developer = () => {
  const socialLinks = [
    {
      platform: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/austinabu8',
      handle: '@austinabu8'
    },
    {
      platform: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/shaik-abu-bakar-siddik-34a509292',
      handle: 'SHAIK ABU BAKAR SIDDIK'
    },
    {
      platform: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/yourusername/austinabu8',
      handle: 'SHAIK ABU BAKAR SIDDIK'
    },
    
  ];

  const skills = [
    'React', 'Node.js', 'Python', 'AI/ML', 
    'FFmpeg', 'JavaScript', 'CSS', 'MongoDB'
  ];

  return (
    <div className="developer-container">
      <div className="developer-header">
        <h2 className="section-title">Meet the Developer</h2>
        <p className="section-subtitle">
          Passionate about creating innovative solutions with modern technology
        </p>
      </div>

      <div className="developer-card">
        <div className="developer-image-section">
         
         
        </div>

        <div className="developer-info">
          <h3 className="developer-name">SHAIK ABU BAKAR SIDDIK</h3>
          <p className="developer-title">Full Stack Developer & AI Enthusiast</p>
          
          <p className="developer-bio">
            Hi! I'm a passionate developer who loves building innovative web applications. 
            This subtitle generator combines my interests in AI, video processing, and 
            user-friendly interfaces. Always excited to work on projects that make 
            technology accessible to everyone.
          </p>

          <div className="skills-section">
            <h4 className="skills-title">Tech Stack</h4>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="project-info">
        <h3 className="project-title">About This Project</h3>
        <p className="project-description">
          Built with modern web technologies, this AI-powered subtitle generator 
          leverages AssemblyAI's speech recognition API and FFmpeg for video processing. 
          The goal was to create an intuitive, fast, and reliable tool for content creators.
        </p>
        
        <div className="project-stats">
          <div className="project-stat">
            <div className="stat-icon">⏱️</div>
            <div className="stat-info">
              <div className="stat-number">~2 weeks</div>
              <div className="stat-label">Development Time</div>
            </div>
          </div>
          <div className="project-stat">
            <div className="stat-icon">🔧</div>
            <div className="stat-info">
              <div className="stat-number">6</div>
              <div className="stat-label">Technologies Used</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
