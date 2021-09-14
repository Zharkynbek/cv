import React from "react";
import styled from "styled-components";

const Contact = styled.nav`
  a {
    text-decoration: none;
    color: #ccc;
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

  .contacts {
    text-align: center;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 15px;
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
`;

const Contacts = () => {
  return (
    <Contact>
      {" "}
      <h1>&#10100; CONTACTS &#10101;</h1>
      <div>
        <div className="contacts">
          <a class="contacts-link" href="tel:4917668151293" rel="noreferrer">
            &#9742; +49 176 68151293
          </a>
        </div>
        <div className="contacts">
          <a
            class="contacts-link"
            href="mailto:zh.idirisov@gmail.com"
            rel="noreferrer"
          >
            &#9993; zh.idirisov@gmail.com
          </a>
        </div>
        <div className="contacts">
          <a
            target="_blank"
            class="contacts-link"
            href="https://github.com/Zharkynbek"
            rel="noreferrer"
          >
            github.com
          </a>
        </div>
        <div className="contacts">
          <a
            target="_blank"
            class="contacts-link"
            href="https://www.linkedin.com/in/%E2%9A%A1zharkynbek-idirisov-%E2%9A%A1-b41578206/"
            rel="noreferrer"
          >
            linkedin.com
          </a>
        </div>
      </div>
    </Contact>
  );
};

export default Contacts;
