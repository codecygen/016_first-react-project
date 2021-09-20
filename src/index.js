// This React module will focus on ES6

// const React = require('react');
// const ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App.jsx';

// 2 Parameters, what to show, where to show
// Curly braces will accept one line javascript code.
// Simply it takes expressions but not statements.

// Still make sure you use Javascript class inside HTML. For instance, instead of class, write className.
// inside the HTML elements as attributes. Otherwise debugger of browsers will show error.
// For example "contenteditable" attribute consists of lowercase characters as an HTML attribute.
// When you use such things in JSX, make it a camelcase, "contentEditable"
// or instead of "spellcheck" use "spellCheck". These are how it is written in Javascript.

// Check out inline styling too. instead of style="color: red", we use style={{color: "blue"}}.
// First curly braces is for object creation. Outmost curly braces is to integrate an expression into HTML.

// <Heading /> is a component which was imported from a function in "Heading.jsx"
// import Heading from '../src/Heading.jsx';
// This is used to import that compenent into the ReactDOM.render();

//<List /> is a component which was imported from a function in "List.jsx"
ReactDOM.render(
    <App />, 
  document.getElementById('root')
);