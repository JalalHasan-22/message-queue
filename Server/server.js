"use strict";
const { instrument } = require("@socket.io/admin-ui");
const io = require("socket.io")(3000, {
  cors: {
    origin: ["http://localhost:8080", "https://admin.socket.io"],
  },
});

const userIo = io.of("/user");
userIo.on("connection", (socket) => {
  console.log(`Connected to user namespace with username ${socket.userName}`);
});

userIo.use((socket, next) => {
  if (socket.handshake.auth.token) {
    socket.userName = getUsernameFromToken(socket.handshake.auth.token);
    next();
  } else {
    next(new Error("enter a valid token "));
  }
});

function getUsernameFromToken(token) {
  return token;
}

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("send-message", (message, room) => {
    if (room === "") {
      socket.broadcast.emit("received-message", message);
    } else {
      socket.to(room).emit("received-message", message);
    }
  });

  socket.on("join-room", (room, callBack) => {
    socket.join(room);
    callBack(`Joined Room ${room}`);
  });
  socket.on("ping", (num) => {
    console.log(num);
  });
});

// For the socket Admin website where no auth is needed at the moment
instrument(io, { auth: false });
