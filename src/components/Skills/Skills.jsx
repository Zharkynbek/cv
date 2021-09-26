import React from "react";
import styled from "styled-components";

const Skill = styled.nav`
  li {
    list-style: none;
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 400;
    color: #cdccd1;
    &:last-child {
      margin-bottom: 0;
    }

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
    color: #d4af37;

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
      <div id="skills">
        <h1>&#10100; SKILLS &#10101;</h1>
        <h2>&lsaquo; TECH-SKILLS &rsaquo;</h2>
        <ul className="skills">
          <li># HTML5</li>
          <li># CSS3</li>
          <li># SASS</li>
          <li># GIT</li>
          <li># JavaScript</li>
          <li># React.js</li>
        </ul>
        <h2>&lsaquo; SOFT-SKILLS &rsaquo;</h2>
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
