import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Animation
const grow = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Styled components
const StyledContainer = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 20;
  animation: ${grow} 5s cubic-bezier(0.5, 1.65, 0.4, 1) forwards;
`;

const StyledImage = styled.img`
  width: auto;
  height: 200px;
  object-fit: cover;
`;

const StyledText = styled.p`
  margin: 0;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  color: white;
`;

// Component
const TextContainer = ({ text, image, size }) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <StyledContainer ref={containerRef} style={{ width: '100%', height: '100%' }}>
      {isInView && (
        <StyledContainer>
          <StyledImage src={image} alt="Custom" size={size} />
          <StyledText>{text}</StyledText>
        </StyledContainer>
      )}
    </StyledContainer>
  );
};

export default TextContainer;
