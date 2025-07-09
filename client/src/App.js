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

      <div className="App-image">
        <h1>Welcome to my App!</h1>
        <header className="cat-header">
         <img src={theImage} className= "app-cat" alt="cat"/>
         <p>This is a beautiful image from the internet!</p>
        </header>
      </div>
    </>
  );
}

export default App;
