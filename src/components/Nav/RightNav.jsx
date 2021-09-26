import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nawrap;

  li {
    padding: 20px 10px;
    color: #d4af37;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #d4af37;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #1e3250;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="aboutMe" smooth={true} duration={1000}>
          ABOUT ME
        </Link>
      </li>
      <li>
        <Link to="projects" smooth={true} duration={1000}>
          PROJECTS
        </Link>
      </li>
      <li>
        <Link to="skills" smooth={true} duration={1000}>
          SKILLS
        </Link>
      </li>
      <li>
        <Link to="languages" smooth={true} duration={1000}>
          LANGUAGES
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true} duration={1000}>
          CONTACTS
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;
