import logo from './logo.svg';
import './App.css';
import theImage from './cat.avif'; 


function App(props) {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>This is my app!!!</p>
        </header>
      </div>

      <div className="image_container">
        <img src={theImage} />
        <p>This is a beautiful image from the internet!</p>
      </div>
    </>
  );
}

export default App;
