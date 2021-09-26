import React from "react";
import styled from "styled-components";
import avatar from "../../images/avatar.jpeg";

const About = styled.nav`
  .imgWrapper {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    overflow: hidden;
  }

  .aboutWrapper {
    padding-left: 50px;
    padding-right: 50px;
  }

  .name {
    color: #d4af37;
    margin-bottom: 10px;
    font-size: 36px;
    text-align: center;
  }

  .position {
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 24px;
    color: #cdccd1;
    text-align: center;
  }

  .text {
    color: #cdccd1;
    font-size: 20px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 768px) {
      font-size: 26px;
    }
  }
`;

const AboutMe = () => {
  return (
    <About>
      <div className="aboutWrapper" id="aboutMe">
        <div className="imgWrapper">
          <div className="avatar">
            {" "}
            <img src={avatar} alt="avatar" width="200" />
          </div>
        </div>
        <h1 className="name">Zharkynbek Idirisov</h1>
        <p className="position">Frontend Developer</p>

        <p className="text">
          I am a Front-End developer looking for a full-time position in a
          product company that's aimed at making both everyday life and business
          easier, more productive and user-friendly. I have sound knowledge of
          HTML, CSS, JavaScript, and React. Open to any new career
          opportunities.
        </p>
      </div>
    </About>
  );
};

export default AboutMe;
