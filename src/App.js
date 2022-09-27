import React, {useState} from 'react';
import Data from './data/img.json';
import Model from './components/Model';
import './index.css'
function App() {
  const [clickedImage, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleEvt = (el, i) => {
    setCurrentIndex(i);
    setClickedImg(el.link)
  }

  const handleRotationRight = () => {
    const totalLength = Data.data.length;
    if(currentIndex + 1 >= totalLength){
      setCurrentIndex(0);
      const newUrl = Data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = Data.data.filter((item) => {
      return Data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex)
  }

  const handleRotationLeft = () => {
    const totalLength = Data.data.length;
    if(currentIndex === 0){
      setCurrentIndex(totalLength - 1);
      const newUrl = Data.data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = Data.data.filter((item) => {
      return Data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  }

  return (
    <div className="wrapper">
      {Data.data.map((el, i) => (
        <div key={i} className="wrapper-images">
         <img src={el.link} alt={el.text} onClick={() => handleEvt(el,i)}/>
         <h3>{el.text}</h3>
        </div>
      ))}
      <div>
      {clickedImage && (
        <Model  clickedImage={clickedImage} 
                handleRotationRight={handleRotationRight}
                setClickedImg={setClickedImg} 
                handleRotationLeft={handleRotationLeft} 
        />)}

      </div>
    </div>
  );
}

export default App;


