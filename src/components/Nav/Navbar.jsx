import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    justify-content: space-around;
  }

  .logo {
    color: #d4af37;
    font-weight: 700;
    font-size: 26px;
    padding: 10px 0;
    text-align: center;
    @media (min-width: 768px) {
      font-size: 30px;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">&#10094; &#9761; &#10072; &#10095;</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
