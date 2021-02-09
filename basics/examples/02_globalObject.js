/* 
The Global Object
Ref: https://nodejs.org/api/globals.html
*/

// Console
console.log('We can write any message here.');
console.log(this);

// SetTimeout
setTimeout(function() {
  console.log('I am called after 3s.');
}, 3000);

// Set Interval and Clear Interval
let counter = 0;
const timer = setInterval(function () {
  counter += 1;
  console.log('I am called every 2s.');
  if(counter ==  5) {
    console.log('bye bye..');
    clearInterval(timer);
  } 
}, 2000);

// __dirname and __filename
console.log(`The dir name is ${__dirname}`);
console.log('The file name is ' + __filename);
