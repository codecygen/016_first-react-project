// This React module will focus on ES6

// const React = require('react');
// const ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from 'react-dom';

const fName = 'Aras';
const lName = 'Sen';
const randNum = Math.floor(Math.random()*6+1);

// 2 Parameters, what to show, where to show
// Curly braces will accept one line javascript code.
// Simply it takes expressions but not statements.
ReactDOM.render(
  <div>
    <h1>My Favorite Foods</h1>
    <p>My name is {`${fName} ${lName}`}.</p>
    <p>My random number is {randNum}.</p>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>, 
  document.getElementById('root')
);