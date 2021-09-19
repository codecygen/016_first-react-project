// This React module will focus on ES6

// const React = require('react');
// const ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from 'react-dom';

const fName = 'Aras';
const lName = 'Sen';
const randNum = Math.floor(Math.random()*6+1);

const getDate = () => {
  const today = new Date;

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return today.toLocaleDateString('en-US', options);
}

const date = getDate();


// 2 Parameters, what to show, where to show
// Curly braces will accept one line javascript code.
// Simply it takes expressions but not statements.
ReactDOM.render(
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Butter Chicken</li>
      <li>Sushi</li>
      <li>Pizza</li>
    </ul>
    <p>This app is created by {`${fName} ${lName}`}.</p>
    <p>My random number is {randNum}.</p>
    <p>Today is {date}.</p>
  </div>, 
  document.getElementById('root')
);