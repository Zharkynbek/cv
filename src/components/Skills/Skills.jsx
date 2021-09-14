import React from "react";
import styled from "styled-components";

const Skill = styled.nav`
  li {
    margin-bottom: 10px;
    font-weight: 400;
    color: #cdccd1;

    @media (min-width: 768px) {
      font-size: 28px;
    }
  }
  .skills {
    text-align: center;
    color: #cdccd1;
  }

  h1 {
    font-weight: 700;
    font-size: 24px;
    color: #d3ffce;

    text-align: center;
    margin-top: 25px;
    margin-bottom: 15px;
    @media (min-width: 768px) {
      font-size: 32px;
    }
  }
  h2 {
    font-size: 20px;
    color: #cdccd1;

    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
    @media (min-width: 768px) {
      font-size: 26px;
    }
  }
`;

const Skills = () => {
  return (
    <Skill>
      {" "}
      <div>
        <h1>&#10100; SKILLS &#10101;</h1>
        <ul className="skills">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SASS</li>
          <li>GIT</li>
          <li>JavaScript</li>
          <li>React.js</li>
        </ul>
        <h2>SOFT-SKILLS</h2>
        <ul className="skills">
          <li>Teamwork</li>
          <li>Creativity</li>
          <li>Good communication</li>
        </ul>
      </div>
    </Skill>
  );
};

export default Skills;
