const socket = io();
socket.emit('sendMessage', 'Hello');
