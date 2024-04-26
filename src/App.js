// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
// import CONSTANTS from './data/CONSTANTS';
// import { useEffect } from 'react';

function App() {




  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Home />
      <div className='home-redirect'>
        <br />
        <br />
        <h1>Welcome to GAZALA GALLERY</h1>
        <h2>Please wait</h2>
        <h3>(You are being redirected to whatsapp)</h3>
      </div>
    </div>
  );
}

export default App;
