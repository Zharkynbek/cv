import React from "react";
import styled from "styled-components";
import webStudio from "../../images/webStudio.png";
import iceCream from "../../images/iceCream.png";
import event from "../../images/event.png";
import phonebook from "../../images/phonebook.png";

const Project = styled.nav`
  .skills {
    text-align: center;
    color: #cdccd1;
  }

  .project-list {
    @media (min-width: 1200px) {
      display: flex;
    }
  }
  li {
    list-style: none;
    font-size: 20px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    @media (min-width: 1200px) {
      margin-right: 25px;
    }
  }
  .aboutWrapper {
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    // border-radius: 8%;
    overflow: hidden;
  }

  .projectTitel {
    text-align: center;
    margin-top: 20px;
    font-weight: 700;
    font-size: 28px;
    color: #d3ffce;

    @media (min-width: 768px) {
      font-size: 32px;
    }
  }

  .projectImg {
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 180px;
    border: 1px solid #0d2538;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    @media (min-width: 768px) {
      width: 500px;
      height: 280px;
    }
    @media (min-width: 1200px) {
      width: 300px;
      height: 180px;
    }

    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  }
`;

const Projects = () => {
  return (
    <Project>
      <h1 className="projectTitel" id="projects">
        &#10100; Projects &#10101;
      </h1>
      <div className="aboutWrapper">
        <ul className="project-list">
          <li className="project-item">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://zharkynbek.github.io/goit-markup-hw-08/"
            >
              <img src={webStudio} alt="" className="projectImg" />
            </a>
            <p className="skills">&lang; HTML, SCSS &rang;</p>
          </li>
          <li className="project-item">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://sergey-proskurnin.github.io/team-project-ice-cream/"
            >
              <img src={iceCream} alt="" className="projectImg" />
            </a>
            <p className="skills">&lang; HTML, SCSS, JS, jquery &rang;</p>
          </li>
          <li className="project-item">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://sergey-proskurnin.github.io/team-project-event-booster/"
            >
              <img src={event} alt="" className="projectImg" />
            </a>
            <p className="skills">&lang; HTML, SCSS, JS, Firebase &rang;</p>
          </li>
          <li className="project-item">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://phone-hw09.netlify.app/"
            >
              <img src={phonebook} alt="" className="projectImg" />
            </a>
            <p className="skills">&lang; HTML, SCSS, JS, React &rang;</p>
          </li>
        </ul>
      </div>
    </Project>
  );
};

export default Projects;
