// This React module will focus on ES6

// const React = require('react');
// const ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from 'react-dom';

const fName = 'Aras';
const lName = 'Sen';
const randNum = Math.floor(Math.random()*6+1);

const getDate = () => {
  const date = new Date();
  // const year = date.getFullYear();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return date.toLocaleDateString('en-US', options);
}

const dateInfo = getDate();


// 2 Parameters, what to show, where to show
// Curly braces will accept one line javascript code.
// Simply it takes expressions but not statements.

// Still make sure you use Javascript class inside HTML. For instance, instead of class, write className.
// inside the HTML elements as attributes. Otherwise debugger of browsers will show error.
// For example "contenteditable" attribute consists of lowercase characters as an HTML attribute.
// When you use such things in JSX, make it a camelcase, "contentEditable"
// or instead of "spellcheck" use "spellCheck".
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="true">My Favorite Foods</h1>
    <ul>
      <li>Butter Chicken</li>
      <li>Sushi</li>
      <li>Pizza</li>
    </ul>
    <p>This app is created by {`${fName} ${lName}`}.</p>
    <p>My random number is {randNum}.</p>
    <p>Today is {dateInfo}.</p>
  </div>, 
  document.getElementById('root')
);