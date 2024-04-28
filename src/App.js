// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
// import CONSTANTS from './data/CONSTANTS';
// import { useEffect } from 'react';
import how1order from "./data/img/how2order1.png"
import CONSTANTS from './data/CONSTANTS';
function App() {

  const openWhatsapp=()=>{
    window.open(CONSTANTS.WHATSAPP_URL || "https://www.google.com")
  }


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
        <h1 onClick={openWhatsapp}>Welcome to GAZALA GALLERY</h1>
        <h2>Please wait</h2>
        <h3>(You are being redirected to whatsapp)</h3>
        <h3>(refersh if not being proceed to whatsapp)</h3>
        <br />
        <br />
      <img src={how1order} alt='how to order' className='w-75p'/>
      </div>
    </div>
  );
}

export default App;
