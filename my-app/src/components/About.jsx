import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about-us" id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi, I'm [Your Name], a passionate [Your Profession] with experience in [Your Specialization]. I have worked on various projects that showcase my skills and expertise in the field. I am dedicated to delivering high-quality work and continuously improving my skills.
        </p>
        <p>
          My journey in [Your Field] started when [briefly describe your background and how you got into the field]. Since then, I have been honing my skills and working on exciting projects that challenge me to grow and learn more.
        </p>
        <h3>Skills</h3>
        <ul className="skills-list">
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
          <li>Skill 4</li>
          {/* Add more skills as needed */}
        </ul>
      </div>
    </div>
  );
}

export default About;
