import React from 'react';

const PI = parseFloat((22/7).toFixed(3));

const doublePI = () => {
    return parseFloat(Math.pow(PI, 2).toFixed(3));
}

const triplePI = () => {
    return parseFloat(Math.pow(PI, 3).toFixed(3));
}

// These will be imported by Misc.jsx
// Default is the one that is imported by default
export default PI;
// These are secondary things that you import.
export { doublePI, triplePI };