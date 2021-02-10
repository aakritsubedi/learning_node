# Core Module

Node.js also ships with bunch of **core modules** which we can use in our application. We can require them in the same way that we would require a user defined modules.  

- Loading **Core Modules**  

In order to use Node.js core or NPM modules, you first need to import it using require() function as shown below.

```javascript
var module = require('module_name');
```

We will only pop in the name of module in `require()`, not the path to the module or anything like that. We will just use the module name because it is the core module built-in to the Node.js, it will fetch that on its own.  

**e.g:**
```javascript
const fs = require('fs'); //file module
const http = require('http'); //http module
const events = require('events'); //events module
```

Some of the frequently used **core modules** are: 

| TItle        |      Description             |
|--------------|------------------------------|
| http | http module includes classes, methods and events to create Node.js http server. |
| url | url module includes methods for URL resolution and parsing. |
| path | path module includes methods to deal with file paths. |
| fs | fs module includes classes, methods, and events to work with file I/O. |
| util | util module includes utility functions useful for programmers. |
| querystring | querystring module includes methods to deal with query string. |

Some of the example of core modules are: 
- **Event Module**  
We can use **event emitter** in Node.js to create a custom events and then react to those events when they are emitted.  

![Event Module](../screenshots/eventEmitter.gif)

Example file: [Event Module](./examples/08_eventModule.js) 

- **FS Module**  
The **fs module** enables interacting with the file system. All file system operations have synchronous, callback, and promise-based forms. 

![File Module](../screenshots/fsModule.gif)

Example file: [File Module](./examples/09_fileModule.js)

- **HTTP Module**  
Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP). It is used for making a web server to handle requests and provide responses. There are two modules mentioned below: 

**http:** https://nodejs.org/api/http.html   
**https:** https://nodejs.org/api/https.html  

Both these modules are similar but when we want to work on a secure module then we are going to use https. And for which we need to supply a secure certificate whereas for http this is not needed. 

Our first server... 
```javascript
const http = require('http');

// Creating a server
const server  = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain'});
  res.end('Our first server...');
});

const PORT = 3000;
server.listen(PORT, '127.0.0.1');
console.log('The server is listening at PORT ' + PORT);
```

![First Server](../screenshots/firstServer.gif)

Example file: [HTTP Module](./examples/10_httpModule.js)
