import lytesnap_logo from './lytesnap.svg'
import lytesnap_text from './lytesnap_text.svg'
import './App.css';
import 'antd/dist/antd.min.css'
import { Input } from 'antd';
import React from 'react';



const onChange = (e) => {
  console.log('Change:', e.target.value);
};

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={lytesnap_logo} className="App-logo2" alt="logo" />
        <br></br>

        <img src={lytesnap_text} alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Building Character Through Sports
        </a>
        <div
        className='Email-Width'>
        <Input placeholder="Insert Email Here" onChange={onChange} />
        </div>


     </header>

    </div>
  );
}

export default App;
