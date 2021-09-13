import React from "react";
import styled from "styled-components";

const Language = styled.nav`
  h1 {
    font-weight: 700;
    font-size: 24px;
    color: #0d2538;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 15px;
  }

  li {
    font-size: 20px;
    max-width: 700px;
    text-align: center;
    margin-bottom: 5px;
  }
`;

const Languages = () => {
  return (
    <Language>
      {" "}
      <h1>LANGUAGES</h1>
      <ul>
        <li>German - Fluent</li>
        <li>Russian - Fluent</li>
        <li>English - Intermediate</li>
        <li>Turkish - Intermediate</li>
        <li>Kyrgyz - Native</li>
      </ul>
    </Language>
  );
};

export default Languages;
