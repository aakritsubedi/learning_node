const maths = require('./06_myMaths');

const addResult = maths.add(5, 8);
console.log(`The required result is ${addResult}`);

const multiplyResult = maths.multiply(5, 8);
console.log(`The required result is ${multiplyResult}`);

const divideResult = maths.divide(8, 2);
console.log(`The required result is ${divideResult}`);

console.log('The value of PI is ' + maths.PI);
