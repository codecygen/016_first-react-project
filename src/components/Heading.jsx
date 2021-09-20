import React from 'react';

const customStyle = {
    color: "red",
    fontSize: "50px",
    border: "1px solid black"
};

const timeHourInDay =  new Date().getHours();
  
let dayGreeting = '';
let dayGreetingStyle = {};
  
if(timeHourInDay >= 0 && timeHourInDay <= 5) {
    dayGreeting = 'Good Night!';
    dayGreetingStyle = {
      color: 'blue'
    };
} else if(timeHourInDay >= 6 && timeHourInDay <= 11) {
    dayGreeting = 'Good Morning!';
    dayGreetingStyle = {
      color: 'red'
    };
} else if(timeHourInDay >= 12 && timeHourInDay <= 17) {
    dayGreeting = 'Good Afternoon!';
    dayGreetingStyle = {
      color: 'green'
    };
} else {
    dayGreeting = 'Good Evening!';
    dayGreetingStyle = {
      color: 'orange'
    };
}



const Heading = () => {
    return (
    <header>
        <h1 style={customStyle} className="heading" contentEditable="true" spellCheck="true">My Favorite Foods</h1>
        <h1 style={dayGreetingStyle} className="heading">{dayGreeting}</h1>
        <h2>List of My Favorite Foods</h2>
    </header>
    );
}

export default Heading;