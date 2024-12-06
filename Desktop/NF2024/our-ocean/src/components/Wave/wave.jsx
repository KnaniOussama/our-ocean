import styled, { css, keyframes } from 'styled-components';
import WaterBubble from '../Bubbles/bubbles';
import Welcome from '../welcome/welcome';

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

const moveForever = keyframes`
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
`;
const Body = styled.div`
  margin: 0;
`;
const Header = styled.div`
  position: relative;
  text-align: center;
  background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, #45e9ff 100%);
  color: white;
`;
const Logo = styled.svg`
  width: 50px;
  fill: white;
  padding-right: 15px;
  display: inline-block;
  vertical-align: middle;
`;
const InnerHeader = styled.div`
  height: 65vh;
  width: 100%;
  margin: 0;
  padding: 0;
`;
const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
const Waves = styled.svg`
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  min-height: 100px;
  max-height: 150px;

  @media (max-width: 768px) {
    height: 40px;
    min-height: 40px;
  }
`;



const grow = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }

`;
const grow2 = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }

`;
const Parallax = styled.g`
  & > use {
    animation: ${moveForever} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  & > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  & > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  & > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  & > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
  animation: ${grow} 5s cubic-bezier(0.5, 1.65, 0.4, 1) forwards;
`;
const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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
const WavesAnimation = ({ children }) => {
  const renderFishes = () => {
    const fishes = [];
    for (let i = 0; i < Math.floor(Math.random() * (6 - 1 + 1) + 1); i++) {
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
      <Header>
        <InnerHeader as={Flex}>
          <Welcome />
        </InnerHeader>
        <Waves xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <Parallax>
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255, 255, 255, 0.664)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="#04abb4" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="#009CA5" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#008F9E" />
          </Parallax>
        </Waves>
      </Header>
      <Content>
        {renderBubbles()}
        {renderFishes()}
        {children}
      </Content>
    </Body>
  );
};

export default WavesAnimation;
