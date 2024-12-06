import GameComponent from './components/Game/GameComp'
import TextContainer from './components/TextContainer/textContainer'
import WavesAnimation from './components/Wave/wave'
import WaveLessAnimation from './components/Wave/waveLess'
function App() {
  return (
    <>
    <WavesAnimation>
    <TextContainer text={"Water makes up approximately 70% of the human body"} image={"https://www.nicepng.com/png/full/78-785512_lubricates-our-moving-parts-water-in-the-body.png"} size={21}/>
    <TextContainer text={"The ocean covers about 70% of Earth's surface"} image={"https://clipart-library.com/img/812127.png"} size={200}/>
    </WavesAnimation>
   <WaveLessAnimation>
    <TextContainer text={"The human body produces bioelectricity, enabling the nervous system and heart to function."} image={"https://cdn-icons-png.flaticon.com/512/4178/4178962.png"} size={21}/>
    <TextContainer text={"The ocean generates waves, tides, and currents that can be harnessed for energy."} image={"https://static.vecteezy.com/system/resources/thumbnails/019/907/492/small_2x/wave-graphic-clipart-design-free-png.png"} size={200}/>
    </WaveLessAnimation>

    <WaveLessAnimation>
    <TextContainer text={"The human body also detoxifies itself through the liver, kidneys, and lymphatic system."} image={"https://cdn-icons-png.flaticon.com/512/6282/6282458.png"} size={21}/>
    <TextContainer text={"The ocean has natural mechanisms to cleanse itself, like breaking down organic matter and redistributing nutrients."} image={"https://www.pngplay.com/wp-content/uploads/6/Bacteria-Vector-PNG-HD-Quality.png  "} size={200}/>
    </WaveLessAnimation>

    <WaveLessAnimation>
    <TextContainer text={"The human body produces bioelectricity, enabling the nervous system and heart to function."} image={"https://cdn-icons-png.flaticon.com/512/4178/4178962.png"} size={21}/>
    <TextContainer text={"The ocean generates waves, tides, and currents that can be harnessed for energy."} image={"https://static.vecteezy.com/system/resources/thumbnails/019/907/492/small_2x/wave-graphic-clipart-design-free-png.png"} size={200}/>
    </WaveLessAnimation>
    <GameComponent />

    </>
  )
};
export default App
