import styled, { css, keyframes } from 'styled-components';
import WaterBubble from '../Bubbles/bubbles';


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
const Body = styled.div`
  margin: 0;
`;
const Content = styled.div`
  position: relative;
  display: flex;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
  height: 100vh;
  background-color: #008f9e;
  overflow: hidden;
`;
const BubbleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  animation: ${floatUp} 10s ease-in infinite;
`;


const swimAnimation = keyframes`
  0% {
    transform: translateX(-10%) scaleX(1); /* Start moving right */
  }
  50% {
    transform: translateX(150%) scaleX(1); /* Middle: no direction change yet */
  }
  51% {
    transform: translateX(150%) scaleX(-1); /* Flip direction */
  }
  100% {
    transform: translateX(-10%) scaleX(-1); /* Return to start, facing left */
  }
`;
const swimAnimation2 = keyframes`
  0% {
    transform: translateX(-10%) scaleX(-1); /* Start moving right */
  }
  50% {
    transform: translateX(150%) scaleX(-1); /* Middle: no direction change yet */
  }
  51% {
    transform: translateX(150%) scaleX(1); /* Flip direction */
  }
  100% {
    transform: translateX(-10%) scaleX(1); /* Return to start, facing left */
  }
`;
const FishWrapper = styled.div`
  position: absolute;
  bottom: ${({ position }) => `${position}%`};
  ${({ direction }) => css`
    animation: ${direction === "right" ? swimAnimation : swimAnimation2} 10s linear infinite;`}
  transform: ${({ direction }) => (direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)')};
  z-index: 0; /* Higher than bubbles */
`;


// Fish image
const FishImage = styled.img`
  width: ${({ size }) => `${size}px`};
  height: auto;
  transition: transform 0.3s ease;
`;
const WaveLessAnimation = ({children}) => {

    const renderFishes = () => {
        const fishes = [];
        for (let i = 0; i < Math.floor(Math.random() * (6 - 1 + 1) + 1) ; i++) {
          const size = Math.random() * 50 + 30;
          const duration = Math.random() * 10 + 5;
          const bottom = Math.random() * 70 + 10;
          const direction = Math.random() < 0.5 ? 'left' : 'right';
          fishes.push(
            <FishWrapper
              key={`fish-${i}`}
              direction={direction}
              position={bottom}
              style={{
                animationDuration: `${duration}s`,
                animationDirection: direction === 'left' ? 'reverse' : 'normal',
              }}
            >
              <FishImage
                src="https://static.vecteezy.com/system/resources/thumbnails/011/458/701/small_2x/fish-cartoon-icon-clipart-png.png"
                size={size}
                alt="Fish"
              />
            </FishWrapper>
          );
        }
        return fishes;
      };
    const renderBubbles = () => {
        const bubbles = [];
        for (let i = 0; i < 15; i++) {
          const size = Math.random() * 20 + 10;
          const duration = Math.random() * 5 + 5;
          const left = Math.random() * 100;
          bubbles.push(
            <BubbleWrapper
              key={i}
              style={{
                left: `${left}%`,
                animationDuration: `${duration}s`,
              }}
            >
              <WaterBubble bubbleSize={size} bubbleColor="rgba(210, 225, 229, 0.8)" />
            </BubbleWrapper>
          );
        }
        return bubbles;
      };
    return (
      <Body>
        <Content>
        {renderBubbles()}
        {renderFishes()}
        {children}

        </Content>
      </Body>
    );
  };

  export default WaveLessAnimation;
