import React from "react";
import styled from "styled-components";

const Language = styled.nav`
  li {
    margin-bottom: 10px;
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

  .languages {
    display: block;
    color: #cdccd1;

    text-align: center;
    font-weight: 400;
    font-size: 18px;

    @media (min-width: 768px) {
      font-size: 28px;
    }
  }
`;

const Languages = () => {
  return (
    <Language>
      <h1>&#10100; LANGUAGES &#10101;</h1>
      <ul className="languages">
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
