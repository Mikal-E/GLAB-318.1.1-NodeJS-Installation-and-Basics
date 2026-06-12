// Part 1: Node Installation - previously done.

// Part 2: Node Command Line Interface.

console.log("Hello World")

// Part 3: Node Package Manager.

// Try modifying the contents of your index.js file, and save it. Watch how the command line responds.

console.log("Using nodemon to run your program is simple")

// Part 4: Creating a Server.

// Use the require keyword to include the http module.

const http = require('http');

// Define the location and port of the server.

const hostname = '127.0.0.1';
const port = 3000;

// Use the createServer method on the http object to define how the server will behave.

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World!\n');
// });

// Call the listen method on the server object, pass it the port and hostname, and use callback function to test if the server is running.

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// Change the createServer call.

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1 style="color: red">Hello World!</h1>');
  res.write('<p>I wonder what else we can send...</p>');
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});