import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for bubble animation
const floatUp = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh);
    opacity: 0;
  }
`;

const BubbleWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Bubble = styled.div`
  width: ${({ size }) => size || 20}px;
  height: ${({ size }) => size || 20}px;
  background: ${({ color }) => color || 'rgba(0, 162, 255, 0.7)'};
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 162, 255, 0.4);
  animation: ${floatUp} ${({ duration }) => duration || 5}s ease-in infinite;
  position: absolute;
  bottom: 0;

  &:nth-child(2) {
    animation-delay: 0.5s;
    width: ${({ size }) => (size || 20) * 0.8}px;
    height: ${({ size }) => (size || 20) * 0.8}px;
  }

  &:nth-child(3) {
    animation-delay: 1s;
    width: ${({ size }) => (size || 20) * 0.6}px;
    height: ${({ size }) => (size || 20) * 0.6}px;
  }
`;

const WaterBubble = ({ bubbleCount = 2, bubbleSize = 2, bubbleColor = 'rgba(215, 215, 215, 0.559)', duration = 3 }) => {
  return (
    <BubbleWrapper>
      {Array.from({ length: bubbleCount }).map((_, index) => (
        <Bubble
          key={index}
          size={bubbleSize}
          color={bubbleColor}
          duration={duration + index * 0.5}
        />
      ))}
    </BubbleWrapper>
  );
};

export default WaterBubble;
