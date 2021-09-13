import React from "react";
import styled from "styled-components";
import webStudio from "../../images/webStudio.png";
import iceCream from "../../images/iceCream.png";
import event from "../../images/event.png";
import phonebook from "../../images/phonebook.png";

const Project = styled.nav`
  li {
    list-style: none;
  }
  .aboutWrapper {
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 8%;
    overflow: hidden;
  }

  .projectTitel {
    text-align: center;
    margin-top: 20px;
    font-weight: 700;
    font-size: 32px;
    color: #0d2538;
  }

  .projectImg {
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 180px;
    margin-bottom: 20px;
    border: 1px solid #0d2538;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    @media (min-width: 768px) {
      width: 500px;
      height: 280px;
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
      <h1 className="projectTitel">Projects</h1>
      <div className="aboutWrapper">
        <ul>
          <li>
            <a href="https://zharkynbek.github.io/goit-markup-hw-08/">
              <img src={webStudio} alt="" className="projectImg" />
            </a>
          </li>
          <li>
            <a href="https://sergey-proskurnin.github.io/team-project-ice-cream/">
              <img src={iceCream} alt="" className="projectImg" />
            </a>
          </li>
          <li>
            <a href="https://sergey-proskurnin.github.io/team-project-event-booster/">
              <img src={event} alt="" className="projectImg" />
            </a>
          </li>
          <li>
            <a href="https://zharkynbek.github.io/goit-markup-hw-08/">
              <img src={phonebook} alt="" className="projectImg" />
            </a>
          </li>
        </ul>
      </div>
    </Project>
  );
};

export default Projects;
