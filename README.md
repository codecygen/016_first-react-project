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

Javascript Functions, map, filter, reduce, find, findIndex, subString, Spread Operator, Object Keys as Variable
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

// ================================================
// Spread Operator
// Spread Operator is used to put an array or object into another array or object.
// ================================================

const citrus = ['Lime', 'Lemon', 'Grapefruit'];
const fruits = ['Apple', ...citrus, 'Banana', 'Plum'];

const fullName = {
    fName: 'James',
    lName: 'Bond'
};

// Triple dot is necessary as otherwise system takes them as a subArray or subObject
const user = {
    ...fullName,
    id: 1,
    userName: 'jbond007'
};

console.log(fruits);
// Output: Array(6) [ "Apple", "Lime", "Lemon", "Grapefruit", "Banana", "Plum" ]

console.log(user);
// Output: Object { fName: "James", lName: "Bond", id: 1, userName: "jbond007" }

// ================================================
// Object Key as Variable
// Assigning an Object key as a variable
// ================================================

let currentYear = new Date().getFullYear();
let newKey = 'education';

// In this example, newKey is set as 'education' but we have to put extra
// square brackets to write that variable. If you don't put inside the square
// brackets, javascript will think the keyword as 'newKey' instead of considering
// it as variable name for 'education' and assigning it.
const newPerson = {
    fName: 'Kevin',
    lname: 'Mitnick',
    age: currentYear - 1963,
    [newKey]: 'University of Southern California'
};

console.log(newPerson);
// Output: Object { fName: "Kevin", lname: "Mitnick", age: 58, education: "University of Southern California" }
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

Javascript Destructuring Assignment:
===
Refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
for more info.

Refer to "023_es6-destructuring" for more details.

```
const animals = [
  { name: "cat", sound: "meow", feedingReq: {
    food: 2,
    water: 3
  } },
  { name: "dog", sound: "woof", feedingReq: {
    food: 3,
    water: 4
  } }
];

// For deconstructing arrays, you can directly give random keys in arrays
const [cat, dog] = animals;

// For deconstructing objects, you cannot directly give random keys in objects
// Since feedingReq section omitted, it is will not be deconstructed.
// const { name, sound } = cat;

// You can also assign a special key variable names for name and sound.
const { name: catName, sound: catSound } = cat;

// You can also assign a special key names for name and sound.
// This one means that assign "Fluffy" and sound "Purr" if it is not assigned.
// Since in these case, the values were already assigned as "cat" and "meow"
// They will not change.
// const { name: "Fluffy", sound: "Purr" } = cat;

// This one further desconstructs the feedingReq section and assigning new variables
// const { name, sound, feedingReq: {food, water} } = cat;

// You can also only deconstruct feedingReq section
// const { feedingReq: {food, water} } = cat;

// You can desconstruct like this
// rest corresponds with sound and feedingReq section.
// const { name, ...rest } = cat;

export default animals;
export { cat, dog, catName, catSound };
```

```
const cars = [
  {
    model: "Honda Civic",
    //The top colour refers to the first item in the array below:
    //i.e. hondaTopColour = "black"
    coloursByPopularity: ["black", "silver"],
    speedStats: {
      topSpeed: 140,
      zeroToSixty: 8.5
    }
  },
  {
    model: "Tesla Model 3",
    coloursByPopularity: ["red", "white"],
    speedStats: {
      topSpeed: 150,
      zeroToSixty: 3.2
    }
  }
];

const [honda, tesla] = cars;
const {speedStats: {topSpeed: hondaTopSpeed}} = honda;
const { coloursByPopularity: [hondaTopColour] } = honda;
const {speedStats: {topSpeed: teslaTopSpeed}} = tesla;
const { coloursByPopularity: [teslaTopColour] } = tesla;

// You can use these lines to reduce repitition
// const [honda, tesla] = cars;
// const [
//   {
//     speedStats: { topSpeed: hondaTopSpeed },
//     coloursByPopularity: [hondaTopColour]
//   },
//   {
//     speedStats: { topSpeed: teslaTopSpeed },
//     coloursByPopularity: [teslaTopColour]
//   }
// ] = [honda, tesla];

export default cars;
export { honda, hondaTopSpeed, hondaTopColour, tesla, teslaTopSpeed, teslaTopColour };
```

Event Handling:
===

For more information, refer to "024_event-handling-in-react".

```
import React, {useState} from "react";


const App = () => {


  const [headingText, setHeadingText] = useState('Mouse not hovered on button!');
  const [buttonColor, setButtonColor] = useState('white');
  const [fullName, setFullName] = useState({
    fName: '',
    lName: ''
  });

  const [submittedFName, setSubmittedFName] = useState({
    fName: '',
    lName: ''
  });

  const handleClick = () => {
    // SubmittedFName will get all the values from
    // typed record which is fullName.
    setSubmittedFName({
      fName: fullName.fName,
      lName: fullName.lName
    });
  }
  
  const handleMouseOver = () => {
    setHeadingText('Mouse Over!');
    setButtonColor('black');
  }

  const handleMouseOut = () => {
    setHeadingText('Mouse Out!');
    setButtonColor('white');
  }

  const handleNameChange = (e) => {
    // value that you enter into input cell, this also controls
    // value attribute of the element.
    const newValue = e.target.value;

    // name attribute in input elements
    const inputName = e.target.name;
    
    // You have to write it like this because, React
    // will delete the previous fName or lName value
    // in other cases.
    inputName === 'fName' ?
      setFullName({fName: newValue, lName: fullName.lName})
      : setFullName({lName: newValue, fName: fullName.fName})

    // You can also call another function in setFullName function if you
    // want to do so.
  }

  // In HTML, elements are responsible of handling their own state.
  // For example, if you type in an input element, the value will be
  // equal to the one that you already typed.

  // In React, however, you have to set the value property to the 
  // Thing you typed manually.

  // Alternative solution for "onClick={handleClick}" for button element
  // would be to wrap entire thing with form element (input and button elements),
  // replace "onClick={handleClick}" with "type='submit", then
  // in form element, as an attribute add this "onSubmit={handleClick}"
  // In this case you have to pass an argument inside "handleClick(e)" function,
  // Inside it write "e.preventDefault();"

  return (
    <div className="container">
      <h1>Hello {submittedFName.fName} {submittedFName.lName}</h1>
      <h1>You typed {fullName.fName} {fullName.lName}</h1>
      <h1>{headingText}</h1>
      <input 
        type="text"
        name='fName' 
        placeholder="First Name" 
        onChange={handleNameChange}
        value={fullName.fName} 
      />

      <input 
        type="text" 
        name='lName'  
        placeholder="Last Name" 
        onChange={handleNameChange}
        value={fullName.lName} 
      />
      
      <button 
        style={{backgroundColor: buttonColor}} 
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut} 
        onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
```

Event Handling Practice:
===

Here is another example. For more information, refer to "025_event-handling-in-react-practice".

```
import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // if(name === 'fName'){
    //   setContact({
    //     fName: value,
    //     lName: contact.lName,
    //     email: contact.email
    //   });
    // } else if(name === 'lName'){
    //   setContact({
    //     fName: contact.fName,
    //     lName: value,
    //     email: contact.email
    //   });
    // } else {
    //   setContact({
    //     fName: contact.fName,
    //     lName: contact.lName,
    //     email: value
    //   });
    // }

    if(name === 'fName'){
        setContact({
          // Using spread operator to add the latest version of the 'contact' object.
          ...contact,
          fName: value
        });
      } else if(name === 'lName'){
        setContact({
          ...contact,
          lName: value
        });
      } else {
        setContact({
          ...contact,
          email: value
        });
      }
  }

  

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleChange} value={contact.fName} />
        <input name="lName" placeholder="Last Name" onChange={handleChange} value={contact.lName} />
        <input name="email" placeholder="Email" onChange={handleChange} value={contact.email} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
```

Spread Operator Practice:
===

For more information, refer to "026_es6-spread-operator-practice".

```
// App.jsx

import React, { useState } from "react";
import ToDoItem from './ToDoItem';
import InputArea from "./InputArea";

const App = () => {

  const [ items, setItems ] = useState([]);

  const handleClick = (item) => {
    setItems(prevItems => [...prevItems, item]);
  }

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <InputArea 
          onClicked={handleClick}
        />
      <div>
        <ul>
          {items.map((currentItem, index) => {
            return(
              // we used id as an index key too because props have no
              // way of accessing "key" key.
              // id will be used to delete the item.
              // Normally the index value that is passed from map, is not suggested
              // To be used as a value. For a real project look online for alternative
              // solutions
              <ToDoItem 
                key={index}
                id={index}
                item={currentItem}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
```

```
// InputArea.jsx

import React, { useState } from 'react';


const InputArea = (props) => {
    const [ item, setItem ] = useState('');

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setItem(inputValue);
    }

    return(
        <div className="form">
          <input 
            type="text" 
            placeholder='Enter New Item'
            onChange={handleChange}
            value={item}
          />
          <button onClick={() => {
              props.onClicked(item);
              setItem('');
          }}>
            <span>Add</span>
          </button>
        </div>
    );
}

export default InputArea;
```

```
// ToDoItem.jsx 

import React, { useState } from 'react';




const ToDoItem = (props) => {

    const [ isDone, setIsDone ] = useState(false);

    // prevValue is a hooks term, it takes isDone's previous value as an argument
    const handleClick = () => {
        setIsDone(prevValue => {
            return !prevValue;
        });
    }
    
    return(
        <li 
            // You can use ternary operator inside the style
            style={{textDecoration: isDone ? 'line-through' : 'none'}}
            // onClick even can take multiple functions.
            // for a single function it should be onClick={handleClick}
            onClick={() => {
                handleClick();
                // You can only call props.id argument inside the function
                // if you have a function like this.
                // It does not work like onClick={props.onChecked(props.id)}
                // Because in that case the function will be called immediately.
                props.onChecked(props.id);
            }}
                >{props.item}
        </li>
    );
}

export default ToDoItem;
```

Note Keeping App with Material UI NPM Package:
===

For more information, refer to "017_keeper-app-project".

```
// App.jsx

import React, { useState } from 'react';
import Header from './components/Header';
import InputNote from './components/InputNote';
import Note from './components/Note';
import Footer from './components/Footer';
// Notes not used anymore
// import notes from './notes';

const App = () => {

    const [ submittedInput, setSubmittedInput ] = useState([]);

    const handleClick = (inputData) => {

        setSubmittedInput([
            ...submittedInput, 
            inputData
        ]);
    }

    const deleteNote = (noteIndex) => {
        setSubmittedInput(allNotes => {
            return allNotes.filter((eacNote, index) => {
                return index !== noteIndex;
            });
        });
    }


    return(
        <div>
            <Header />
            <InputNote 
                handleClick={handleClick}
            />
            {/* {notes.map((note, index) => 
                    <Note 
                        key={index}
                        {...notes[index]}
                    />
            )} */}

            {submittedInput.map((eachNote, index) => 
                    <Note 
                        key={index}
                        id={index}
                        deleteNote={deleteNote}
                        {...submittedInput[index]}
                    />
            )}

            {/* 
            <Note {...notes[0]} />
            <Note {...notes[1]} />
            <Note {...notes[2]} />
            <Note {...notes[3]} /> */}

            {/* <Note 
                title={notes.title}
                content={notes.content}
            /> */}

            <Footer />
        </div>
    );
}

export default App;
```

```
// InputNote.jsx

import React, { useState } from 'react';
// Documentation suggests
// import DeleteIcon from '@mui/icons-material/Delete';
// Do not use @mui/icons-material/Delete
// Instead, use @material-ui/icons/Delete
// as a path.
import AddCircleIcon from '@material-ui/icons/AddCircle';

import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

const InputNote = (props) => {

    const [ inputData, setInputData ] = useState({
        inputAreaText: '',
        textAreaText: ''
    });

    const typeNoteFunc = (e) => {
        // Input name and input value for title typing
        const { name, value } = e.target;

        name === 'inputArea' ? 
            setInputData({...inputData, inputAreaText: value}) :
            setInputData({...inputData, textAreaText: value});
    }

    return(

        <section id="note-input">
            <form onSubmit={(e) => {
                // This prevents submit button from refreshing
                // webpage.
                e.preventDefault();
                props.handleClick(inputData);
                setInputData({
                    inputAreaText: '',
                    textAreaText: ''
                });
            }}>
                <input 
                    type="text" 
                    name="inputArea" 
                    placeholder="Title" 
                    onChange={typeNoteFunc} 
                    value={inputData.inputAreaText} 
                />

                <textarea 
                    type="text" 
                    name="textArea" 
                    placeholder="Take a note..." 
                    onChange={typeNoteFunc} 
                    value={inputData.textAreaText}
                />
                <div className="btn-container">
                     <Zoom className="fab-btn" in={true}>
                        <Fab type="submit"><AddCircleIcon /></Fab>
                    </Zoom>
                </div>
                
            </form>
        </section>
    );
}

export default InputNote;
```

```
// Note.jsx

import React from 'react';
// Documentation suggests
// import DeleteIcon from '@mui/icons-material/Delete';
// Do not use @mui/icons-material/Delete
// Instead, use @material-ui/icons/Delete
// as a path.
import DeleteIcon from '@material-ui/icons/Delete';

const Note = (props) => {
    return(
        <section className="note">
            <h1>{props.inputAreaText}</h1>
            <p>{props.textAreaText}</p>
            <div className="btn-container">
                    <button 
                        class="delete-btn" 
                        type="submit"
                        onClick={() => {
                            props.deleteNote(props.id);
                        }}
                    ><DeleteIcon /></button>
            </div>
        </section>
    );
}

export default Note;
```