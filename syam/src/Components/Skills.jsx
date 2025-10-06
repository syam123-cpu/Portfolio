import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills reveal">
      <h2>My Skills</h2>
      <div className="skill-logos">
        <div className="skill">
          <p>HTML</p>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML Logo"
          />
        </div>
        <div className="skill">
          <p>CSS</p>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS Logo"
          />
        </div>
        <div className="skill">
          <p>JavaScript</p>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript Logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
