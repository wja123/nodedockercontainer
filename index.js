var http = require('http');
var express = require('express');
var app = express()
const PORT = 8080;
const HOST = '0.0.0.0';
var server = http.createServer(app);



app.get('/', (req, res) => {
  res.status(200).send('Hello World! This is my first Node Docker App!\n')
})

server.listen(`${PORT}`, `${HOST}`, function(error){
  console.log('Server Listening on: ' + `${HOST}:${PORT}`)
})
