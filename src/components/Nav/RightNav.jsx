import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nawrap;

  li {
    padding: 20px 10px;
    color: #d4af37;
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
      <li>ABOUT ME</li>
      <li>PROJECTS</li>
      <li>SKILLS</li>
      <li>CONTACTS</li>
    </Ul>
  );
};

export default RightNav;
