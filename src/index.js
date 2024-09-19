import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import "./style.css"

const root = ReactDOM.createRoot(document.getElementById('root'))

function RandomNumber() {
  var [randomNumber, setRandomNumber] = useState(0)

  function generateRandomNumber(){
    var random = Math.floor(Math.random() * 10)
    setRandomNumber(random)
  };

  return (
    <div className="container">
      <h1>Random Number Generator</h1>
      <div className="random-number">{randomNumber}</div>
      <button className="generate-btn" onClick={generateRandomNumber}>
        Generate Random Number
      </button>
    </div>
  );
}


root.render(<RandomNumber/>)