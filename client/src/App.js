import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import theImage from './cat.avif';
import theImage1 from './myCatImgs/1.jpg';
import theImage2 from './myCatImgs/2.jpg';
import theImage3 from './myCatImgs/3.jpg';
import theImage4 from './myCatImgs/4.jpg';
import theImage5 from './myCatImgs/5.jpg';
import theImage6 from './myCatImgs/6.jpg';
import theImage7 from './myCatImgs/7.jpg';
import theImage8 from './myCatImgs/8.jpg';
import theImage9 from './myCatImgs/9.jpg';

const Thumbnail = ({ arr, image, index }) => {
  return (
    <div className="thumbnail">
      {arr.map((imgsrc, i) => (
        <img
          key={i}
          height="50"
          src={imgsrc}
          onClick={() => image(i)}
          className={index === i ? 'active' : ''}
          alt={`thumbnail ${i + 1}`}
        />
      ))}
    </div>
  );
};


const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0);

  
  useEffect(() => {
    setIndex(0);
  }, []);

  
  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0); 
    } else {
      setIndex(index + 1);
    }
  };

  
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  }; 

  
  return (
    <div className="slideshow">
      {}
      {imgs && imgs.length > 0 && <img className="mainImg" src={imgs[index]} alt="slideshow content" />}
      <div className="actions">
        <button onClick={prev}>PREV</button>
        <button onClick={next}>NEXT</button>
      </div>
      <Thumbnail arr={imgs} image={setIndex} index={index} />
    </div>
  );
};


function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>This is my website!!!</p>
        </header>
      </div>

      <div className="App-image">
        <h1>Welcome to my website!</h1>
        <header className="cat-header">
          <img src={theImage} className="app-cat" alt="cat" />
          <p>This is a beautiful image from the internet!</p>
        </header>
      </div>

      <div className="App-slideshow">
        <h1>Slideshow</h1>
        <Slideshow
          imgs={[
            theImage1,
            theImage2,
            theImage3,
            theImage4,
            theImage5,
            theImage6,
            theImage7,
            theImage8,
            theImage9,
          ]}
        />
      </div>
    </>
  );
} 

export default App;
