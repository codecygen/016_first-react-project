This React module will focus on ES6
This is the first ReactJS project!


Import React Library
===
```
import React from 'react';
<!-- Do not use the second one -->
<!-- const React = require('react'); -->

import ReactDOM from 'react-dom';
<!-- Do not use the second one -->
<!-- const ReactDOM = require('react-dom'); -->
```
HTML script, JSX declaration
It is really important to use text/JSX as a type instead of text/Javascript as index.js is a JSX file.
This will prevent errors to occur while programming. This is for HTML file.
```
<script src="../src/index.js" type="text/JSX"></script>
```

Rendering DOM
===
2 Parameters, what to show, where to show
Curly braces will accept one line javascript code.
Simply it takes expressions but not statements.

```
ReactDOM.render(
    <App />, 
  document.getElementById('root')
);
```

CSS attributes as Javascript
===
Still make sure you use Javascript class inside HTML attributes. For instance, instead of class, write className. Otherwise debugger of browsers will show error.
For example "contenteditable" attribute consists of lowercase characters as an HTML attribute.
When you use such things in JSX, make it a camelcase, "contentEditable"
or instead of "spellcheck" use "spellCheck". These are how it is written in Javascript.

Check out inline styling too. instead of style="color: red", we use style={{color: "blue"}}.
First curly braces is for object creation. Outmost curly braces is to integrate an expression into HTML.
```
const List = () => {
    return (
    <ul style={{color: "blue"}}>
        <li>Butter Chicken</li>
        <img src={butterChickenLink} alt="Butter Chicken Img"></img>
        <li>Sushi</li>
        <img src={sushiLink} alt="Sushi Img"></img>
        <li>Pizza</li>
        img src={pizzaLink} alt="Pizza Img"></img>
  </ul>);
}
```

Components
===
<Heading /> is a component which was imported from a function in "Heading.jsx"
import Heading from '../src/Heading.jsx';
This is used to import that component into the ReactDOM.render();
Instead of writing full name you can say 
```
import Heading from '../src/Heading';
```

<List /> is a component which was imported from a function in "List.jsx"


Exporting Custom Functions and Variables
===
There are couple of ways to export multiple stuff from a jsx file. Examples are given below for Math.jsx file.
Remember that PI is exported as 

```
export default PI;
```

Default PI is an expression.
Secondary things that are exported as export { doublePI, triplePI };
Secondary things are just functions.

```
export default PI;
export { doublePI, triplePI };
```


Importing Custom Functions and Variables
===
```
import PI, { doublePI, triplePI } from '../components/Math.jsx';
```
Then you need to call them as PI, doublePI(), triplePI().
This method is favored over the method that is mentioned on the other line.

Secondary method is using the following code
```
import * as PI from '../components/Math.jsx';
```
Then you need to call them as PI.default, PI.doublePI(), PI.triplePI().
This method is frowned upon.