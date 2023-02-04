const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketIo(server);

const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

/* Socket.IO */
io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('sendMessage', (message) => {
    console.log('Message has been sent: ', message);
  });
});
