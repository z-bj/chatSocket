# Socket.IO Chat App


This is a simple chat application built using Socket.IO and Express. It allows users to connect to a server and chat with each other in real-time.

## Features

![alt text](https://i.ibb.co/fv11Yhh/2021-10-21-09-53-51-server-js-socket-WSL-Ubuntu-20-04-Visual-Studio-Code.jpg)


-   Real-time communication between multiple clients
-   Simple and intuitive user interface
-   Automatic scrolling to the bottom of the chat window
-   Easy to use and modify

![Node.js](https://img.shields.io/badge/Node.js-43853d?style=flat-square&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat-square&logo=socket.io&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## Installation

To get started, clone the repository and install the required dependencies using `npm`:

``` bash
git clone https://github.com/yourusername/socket-io-chat.git
cd socket-io-chat
npm install
```

## Usage

Client-side [link](https://z-bj.github.io/chatSocket)

Start the server using the following command:

``` bash
node server.js

```


Then, open a web browser and navigate to `http://localhost:3000` to view the chat app.

## Code Overview

The client code is located in `index.html`. It uses the Socket.IO client library to establish a connection to the server and send and receive messages.
The server code is located in `server.js`. It initializes an Express app and creates an HTTP server using the app. Socket.IO is then initialized with the HTTP server.
Here's a brief overview of what the code does:

``` javascript
const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

// Serve the index.html file
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// Handle incoming connections
io.on("connection", function (socket) {
  console.log("a user is connected");

  // Handle disconnections
  socket.on("disconnect", function () {
    console.log("a user is disconnected");
  });

  // Handle incoming chat messages
  socket.on("chat message", function (msg) {
    console.log("received message : " + msg);
    io.emit("chat message", msg);
  });
});

// Start the server
http.listen(3000, function () {
  console.log("Server running on 3000");
});

```


## How It Works

The server uses Express to serve the `index.html` file and Socket.IO to handle incoming connections and messages. When a user connects to the server, a `connection` event is fired and a callback function is called, which logs a message to the console. Similarly, when a user disconnects, a `disconnect` event is fired and a message is logged to the console. Finally, when a user sends a chat message, a `chat message` event is fired and the message is broadcast to all connected users.



## License

This project is licensed under the MIT License.
