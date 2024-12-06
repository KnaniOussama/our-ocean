import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FullScreenContainer = styled.div`
  position: relative;
  height: 100vh;
  background: ${({ scrollPosition }) =>
    `linear-gradient(to top, rgba(0, 0, 0, 0) ${scrollPosition}%, rgba(0, 0, 0, 1) 100%)`};
  overflow: hidden;
  transition: background 0.3s ease-in-out;
`;
const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2rem;
  text-align: center;
`;
const GradientBackground = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollY / maxScroll) * 100;
    setScrollPosition(scrollPercentage);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <FullScreenContainer scrollPosition={scrollPosition}>
      <Content>{children}</Content>
    </FullScreenContainer>
  );
};

export default GradientBackground;
