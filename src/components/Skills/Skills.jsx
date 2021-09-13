import React from "react";
import styled from "styled-components";

const Skill = styled.nav`
  h1 {
    font-weight: 700;
    font-size: 24px;
    color: #0d2538;
    text-align: center;
    margin-top: 45px;
    margin-bottom: 15px;
  }
  h2 {
    font-weight: 700;
    font-size: 24px;
    color: #0d2538;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  li {
    font-size: 20px;
    max-width: 700px;
    text-align: center;
    margin-bottom: 5px;
  }
`;

const Skills = () => {
  return (
    <Skill>
      {" "}
      <h1>SKILLS</h1>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>SASS</li>
        <li>GIT</li>
        <li>JavaScript</li>
        <li>React.js</li>
      </ul>
      <h2>SOFT-SKILLS</h2>
      <ul>
        <li>Teamwork</li>
        <li>Creativity</li>
        <li>Good communication</li>
      </ul>
    </Skill>
  );
};

export default Skills;
