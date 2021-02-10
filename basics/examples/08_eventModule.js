// Importing the EVENT Module
// whatever is exported from events module will be stored in the variable events
const events = require('events');

// own event emitter
const myEmitter = new events.EventEmitter(); 

// Creating an event
myEmitter.on('someEvents', (message) => {
  console.log(message);
});

// Emit the event
myEmitter.emit('someEvents', 'This is my message passed as argument');

let counter = 0;
const myInterval = setInterval(() => {
  counter += 1;
  myEmitter.emit('someEvents', `The value of counter is ${counter}`);
  if(counter >= 5) {
    myEmitter.emit('someEvents', 'Clearing the interval');
    clearInterval(myInterval);
  }
}, 1000);
