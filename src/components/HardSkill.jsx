import React from "react";

const HardSkills = ({ skills }) => {
  return (
    <div className="skills-section">
      <h2 className="section_subtitle">Hard Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.image} alt={skill.tech} className="skill-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HardSkills;
