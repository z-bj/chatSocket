let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function (socket) {
  console.log("a user is connected");
  socket.on("disconnect", function () {
    console.log("a user is disconnected");
  });
  socket.on("chat message", function (msg) {
    console.log("received message : " + msg);
    io.emit("chat message", msg);
  });
});

http.listen(3000, function () {
  console.log("Server running on 3000");
});
