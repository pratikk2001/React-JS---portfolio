import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="landing-page" id="landing-page">
      <div className="landing-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm [Your Name], a passionate [Your Profession]. I specialize in [Your Specialization].</p>
        <div className="landing-buttons">
          <a href="#about" className="btn">Learn More About Me</a>
          <a href="#projects" className="btn">View My Projects</a>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
