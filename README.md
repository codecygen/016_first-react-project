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
```
import React from 'react';
<!-- These are all jsx files -->
import Heading from '../src/components/Heading';
import List from '../src/components/List';
import Misc from '../src/components/Misc';

const App = () => {
    return (
    <div>
        <Heading />
        <List />
        <Misc />
    </div>
    );
}

export default App;
```

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

Props
===

contacts file will look like this
```
const contacts = [
  {
    name: "Beyonce",
    imgURL:
      "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
    phone: "+123 456 789",
    email: "b@beyonce.com"
  },
  {
    name: "Jack Bauer",
    imgURL:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    phone: "+987 654 321",
    email: "jack@nowhere.com"
  },
  {
    name: "Chuck Norris",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com"
  }
];

export default contacts;
```

```
Check out Card.jsx for more details
import contacts from '../contacts';
<Card {...contacts[0]} />
<Card {...contacts[1]} />
<Card {...contacts[2]} />

<!-- Aside from passing props like these, you can also pass them like special attributes as such:
 <Card 
  name='Aras' 
  imgURL='imagelink.com' 
  phone='92358472590' 
  email='me@me.com' 
 /> -->
 ```

 Inside the Card component the passed properties will be used like this:

 ```
 const Card = (props) => {
    return(
        <div>
            <div className="card">
                <div className="top">
                    <h2 className='name'>{props.name}</h2>
                    <Avatar imgURL={props.imgURL} />
                </div>
                <div className="bottom">
                    <Detail
                        phone={props.phone}
                        email={props.email}
                    />
                </div>
            </div>
        </div>
    );
}
 ```

Mapping
===
Mapping is instead of writing the App function like this
```
<Card {...emojipedia[0]} />
<Card {...emojipedia[1]} />
<Card {...emojipedia[2]} />
```

You map through them. Imagine you have 1000 entries in emojipedia. You do not want to write Card component 1000 times.

```
import React from "react";
import emojipedia from '../emojipedia';
import Card from './Card';

// if you dont pass a key element it creates problem says
// Each child in a list should have a unique "key" prop
// Alternatively you can pass each elements individually
// const createCard = (emojiCard, index) => {
//   return(
//     <Card 
//       key={emojiCard.id}
//       emoji={emojiCard.emoji}
//       name={emojiCard.name}
//       meaning={emojiCard.meaning}
//     />
//   );
// }

const createCard = (emojiCard, index) => {
  return(
    <Card 
      key={index}
      {...emojipedia[index]}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}
        {/* <Card {...emojipedia[0]} />
        <Card {...emojipedia[1]} />
        <Card {...emojipedia[2]} /> */}
      </dl>
    </div>
  );
}

export default App;
```

Javascript Functions, map, filter, reduce, find, findIndex, subString
===

```
// import React from 'react';
// import ReactDOM from 'react-dom';
import emojipedia from './emojipedia';

let numArray = [3, 56, 2, 48, 5];


// ================================================
// map function
// ================================================
const squareRootArray = numArray.map(eachNum => Math.pow(eachNum, 0.5));

// IF you make the arrow functions multiple lines, return keywork is needed.
// const squareRootArray = numArray.map(eachNum => {
//     return Math.pow(eachNum, 0.5)
// });

console.log(squareRootArray);
// Output: Array(5) [ 1.7320508075688772, 7.483314773547883, 1.4142135623730951, 6.928203230275509, 2.23606797749979 ]

// ================================================
// reduce function
// ================================================

const concatenateNum = numArray.reduce((previousNum, currentNum) => previousNum.toString() + currentNum.toString());

console.log(concatenateNum);
// Output: 3562485

// ================================================
// filter function
// ================================================

const bigNumArray = numArray.filter(eachNum => eachNum > 30);
console.log(bigNumArray);
// Output: Array [ 56, 48 ]

// ================================================
// find function
// ================================================

const firstBigNum = numArray.find(eachNum => eachNum > 30);
console.log(firstBigNum);
// Output: 56

// ================================================
// findIndex function
// ================================================

const indexOfFistBigNum = numArray.findIndex(eachNum => eachNum > 30);
console.log(indexOfFistBigNum);
// Output: 1

// ================================================
// subString function
// Based on functions above, truncate emojipedia meaning sections to 100 character for each.
// ================================================

const truncatedStringArray = emojipedia.map(eachObj => eachObj.meaning.substring(0, 100));

console.log(truncatedStringArray);
```

Conditional Rendering, Ternary Operator:
===

```
import React from "react";
import Login from './Login';

let isLoggedIn = false;

// For ternary operators you can use "null" as a condition
// currentTime > 12 && <h1>Why are you still working?</h1>
// && opearator exactly does the same thing with ternary operator question mark
const App = () => {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello there...</h1> : <Login />}
    </div>
  );
}

export default App;
```

React Hooks:
===

Hooks example counter button and update time button using useState from React.
For more information, look at "022_reactHook-usestate".

```
// import React from "react";
import React, { useState } from "react";

const App = () => {

  // const [count, setCount] = React.useState(0);
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  const [initialTime, setTime] = useState('Time');
  const getTime = () => {
    let timeNow = new Date().toLocaleTimeString();
    setTime(timeNow);
    setInterval(getTime, 1000);
  };

    return(
      <div>
        <div className="container">
          <h1>{count}</h1>
          <button onClick={decrease}>-</button>
          <button onClick={increase}>+</button>
        </div>
        <div className="container">
          <h1 class='watch'>{initialTime}</h1>
          <button onClick={getTime} class="time-btn">Get Time</button>
        </div>
      </div>
    );
}


export default App;
```