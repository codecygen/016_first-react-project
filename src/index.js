// This React module will focus on ES6

// const React = require("react");
import React from "react";

// const ReactDOM = require("react-dom");
import ReactDOM from "react-dom";

// 2 Parameters, what to show, where to show
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph!</p>
  </div>,
  document.getElementById("root")
);