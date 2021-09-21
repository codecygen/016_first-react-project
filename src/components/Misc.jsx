import React from 'react';
import PI, { doublePI, triplePI } from '../components/Math.jsx';
// import * as PI from '../components/Math.jsx';

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

const getTime = () => {
  const date = new Date();

  const options = {
    hour: '2-digit',
    minute: '2-digit'
  };

  return date.toLocaleDateString('en-US', options);
}

const dateInfo = getDate();
const timeInfo = getTime();
const timeHourInDay =  new Date().getHours();

const Misc = () => {
    return (
        <section>
            <p>This app is created by {`${fName} ${lName}`}.</p>
            <p>My random number is {randNum}.</p>
            <p>PI is {PI}. Square power of PI is {doublePI()}. Cubic power of PI is {triplePI()}.</p>
            <p>Time: {timeInfo}</p>
            <p>Today is {dateInfo}, {timeHourInDay}.</p>
        </section>
    );
}

export default Misc;