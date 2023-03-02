# Socket.IO Chat App

![alt text](https://i.ibb.co/fv11Yhh/2021-10-21-09-53-51-server-js-socket-WSL-Ubuntu-20-04-Visual-Studio-Code.jpg)

This is a simple chat application built using Socket.IO and Express. It allows users to connect to a server and chat with each other in real-time.
### [Link](https://z-bj.github.io/chatSocket)

## Features

-   Real-time communication between multiple clients
-   Simple and intuitive user interface
-   Automatic scrolling to the bottom of the chat window
-   Easy to use and modify

## Installation

To install and run the application, follow these steps:

1.  Clone the repository to your local machine.
2.  Run `npm install` to install the dependencies.
3.  Start the server using `npm start`.
4.  Open your web browser and navigate to `http://localhost:3000`.

## Usage

To use the application, simply enter your message in the input field at the bottom of the screen and click the "Send" button. Your message will be sent to all other connected users, and their messages will be displayed in real-time on the screen.

## How It Works

The app uses Socket.io to establish a connection between the client and server. When a user connects, a message is logged to the console. When a user sends a message, it is logged to the console and broadcasted to all connected users.

## Technologies Used

-   [Express.js](https://expressjs.com/)
-   [Socket.io](https://socket.io/)


## Code Overview

The application consists of two main parts: the server-side code and the client-side code.

### Server-Side Code

The server-side code is written in Node.js using the Express and Socket.IO libraries. It consists of a single file, `index.js`, which sets up an Express server and a Socket.IO instance.

``` javascript

const app = require("express")(); const http = require("http").Server(app); const io = require("socket.io")(http);  // Serve the index.html file app.get("/", function (req, res) {   res.sendFile(__dirname + "/index.html"); });  // Handle incoming connections io.on("connection", function (socket) {   console.log("a user is connected");    // Handle disconnections   socket.on("disconnect", function () {     console.log("a user is disconnected");   });    // Handle incoming chat messages   socket.on("chat message", function (msg) {     console.log("received message : " + msg);     io.emit("chat message", msg);   }); });  // Start the server http.listen(3000, function () {   console.log("Server running on 3000"); });

```









## Code Overview

The server code is located in `server.js`. It initializes an Express app and creates an HTTP server using the app. Socket.IO is then initialized with the HTTP server.

The client code is located in `index.html`. It uses the Socket.IO client library to establish a connection to the server and send and receive messages.

## License

This project is licensed under the MIT License.
