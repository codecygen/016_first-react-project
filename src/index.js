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

const butterChickenLink = 'https://healthyfitnessmeals.com/wp-content/uploads/2020/01/Butter-chicken.jpg';
const sushiLink = 'https://s3-media0.fl.yelpcdn.com/bphoto/hyXoHqyUePwNxarPHn5Ntw/o.jpg';
const pizzaLink = 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg';



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
      <img src={butterChickenLink} alt="Butter Chicken Img"></img>
      <li>Sushi</li>
      <img src={sushiLink} alt="Sushi Img"></img>
      <li>Pizza</li>
      <img src={pizzaLink} alt="Pizza Img"></img>
    </ul>
    <p>This app is created by {`${fName} ${lName}`}.</p>
    <p>My random number is {randNum}.</p>
    <p>Today is {dateInfo}.</p>
  </div>, 
  document.getElementById('root')
);