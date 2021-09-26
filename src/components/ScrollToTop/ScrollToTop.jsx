import React, { useEffect, useState } from "react";
import styled from "styled-components";
import toTop from "../../images/toTop.png";

const Scroll = styled.div`
  .scroll-to-top {
    position: fixed;
    right: 30px;
    bottom: 20px;
    cursor: pointer;
    z-index: 99;
    border: none;
    outline: none;
    background-color: transparent;
    fill: red;
    border-radius: 50%;
  }
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  //scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <Scroll>
      <div>
        {isVisible && (
          <div onClick={scrollToTop}>
            <img
              className="scroll-to-top"
              src={toTop}
              alt=""
              width="50"
              height="50"
            />
          </div>
        )}
      </div>
    </Scroll>
  );
};

export default ScrollToTop;
