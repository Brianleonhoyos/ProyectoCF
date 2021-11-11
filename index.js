const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const path = require('path');
const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

app.use(express.static(path.join(__dirname, 'Public')));

app.set('port', process.env.PORT || 3000);

io.on('connection', (socket) => {
    console.log('a new user connected');
});

server.listen(app.get('port'), () => {
    console.log(`listening on ${app.get('port')}`);
});

var SerialPort = require("serialport");

var arduinoCOMPort = "COM6";

var arduinoSerialPort = new SerialPort(arduinoCOMPort, {
    baudRate: 9600
});

arduinoSerialPort.on('open', function () {
    console.log('Serial Port ' + arduinoCOMPort + ' is opened.');
});
//
arduinoSerialPort.on('data', (data) => {
    //<Buffer 31 0d 0a 31 0d 0a 31 0d 0a 31 0d 0a>
    //Se toma la posicion 0 3 6 y 9 que son los botones referentes a los presionados en el circuito
    //48 equivale a que el boton se presiono y 49 a que el boton no esta presionado
    io.emit('arduino:data', {
        'd': data[0] === 48 ? {index: 0} : null,
        'f': data[3] === 48 ? {index: 1} : null,
        'j': data[6] === 48 ? {index: 2} : null,
        'k': data[9] === 48 ? {index: 3} : null
    });
});
