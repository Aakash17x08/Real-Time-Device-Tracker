const { log } = require("console");
const express = require("express");
const app = express();

const http = require("http");
const path = require("path"); // Required for path.join()

const socketio = require("socket.io");  // Correct import for socket.io
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // Fixed static path middleware

io.on("connection", (socket) => {
    socket.on("send-location", (data)=>{
        io.emit("receive-location", {id : socket.id, ...data});
    });
    socket.on("disconnect", () =>{
        io.emit("user-disconnect", {id : socket.id});
    });
});

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
