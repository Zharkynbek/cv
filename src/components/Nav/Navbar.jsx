import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import logo from "../../images/logo.png";

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
    text-align: center;
    @media (min-width: 768px) {
      padding-left: 50px;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={logo} alt="" width="40" />
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
