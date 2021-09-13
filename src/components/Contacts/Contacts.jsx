import React from "react";
import styled from "styled-components";

const Contact = styled.nav`
  h1 {
    font-weight: 700;
    font-size: 24px;
    color: #0d2538;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 15px;
  }

  div {
    font-size: 18px;
    max-width: 700px;
    text-align: center;
    margin-bottom: 5px;
  }
`;

const Contacts = () => {
  return (
    <Contact>
      {" "}
      <h1>CONTACTS</h1>
      <div>
        <a class="contacts-link" href="tel:4917668151293" rel="noreferrer">
          +49 176 68151293
        </a>
      </div>
      <div>
        <a
          class="contacts-link"
          href="mailto:zh.idirisov@gmail.com"
          rel="noreferrer"
        >
          zh.idirisov@gmail.com
        </a>
      </div>
      <div>
        <a
          target="_blank"
          class="contacts-link"
          href="https://github.com/Zharkynbek"
          rel="noreferrer"
        >
          github.com
        </a>
      </div>
      <div>
        <a
          target="_blank"
          class="contacts-link"
          href="https://www.linkedin.com/in/%E2%9A%A1zharkynbek-idirisov-%E2%9A%A1-b41578206/"
          rel="noreferrer"
        >
          linkedin.com
        </a>
      </div>
    </Contact>
  );
};

export default Contacts;
