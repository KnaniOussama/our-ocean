import React from "react";
import styled, { keyframes } from "styled-components";

// Define the scaling animation
const growText = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1.0);
    opacity: 1;
  }

`;
const AnimatedText = styled.div`
  font-size: 3rem;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  text-align: start;
  align-items: center;
  height: 100vh;
  animation: ${growText} 5s cubic-bezier(0.5, 1.65, 0.4, 1) forwards;
`;

const Welcome = () => {
  return <AnimatedText> {'by'}<br/>{'Oussama & Wissem'}</AnimatedText>;
};

export default Welcome;
