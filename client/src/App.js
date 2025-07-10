import { useState, useEffect, } from 'react';
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

const Slideshow =({ imgs }) => {
  const [index, setIndex] = useState();

  useEffect(() => {
    setIndex(0);
  }, []);

const next = () => {
  
}

const prev = () => {}

  return <div className="slideshow">
    <img className="mainImg" src={imgs[index]} />
    <div className="actions">
      <button onClick={prev}></button>
      <button onClick={next}></button>

  </div>;
}


function App(props) {
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
         <img src={theImage} className= "app-cat" alt="cat"/>
         <p>This is a beautiful image from the internet!</p>
        </header>
      </div>

      <div  className="App-slideshow">
        <h1>Slideshow</h1>
        <Slideshow 
          imgs={[
            <img src={theImage1} className= "mycat1" alt="cat1"/>,
            <img src={theImage2} className= "mycat2" alt="cat2"/>,
            <img src={theImage3} className= "mycat3" alt="cat3"/>,
            <img src={theImage4} className= "mycat4" alt="cat4"/>,
            <img src={theImage5} className= "mycat5" alt="cat5"/>,
            <img src={theImage6} className= "mycat6" alt="cat6"/>,
            <img src={theImage7} className= "mycat7" alt="cat7"/>,
            <img src={theImage8} className= "mycat8" alt="cat8"/>,
            <img src={theImage9} className= "mycat9" alt="cat9"/>
          ]}
        />  
      </div>
    </>
  );
}

export default App;
