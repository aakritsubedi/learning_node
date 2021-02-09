// Normal Function Statement
function sayHello() {
  console.log('Hello!!');
}

sayHello(); // Hello!!

// Function Expression 
const sayHi = function() {
  console.log('Hi!!')
}

sayHi(); // Hi!!

// Also can pass the function
function callFunction(myFunction) {
  myFunction();
}

callFunction(sayHi); // Hi!!
