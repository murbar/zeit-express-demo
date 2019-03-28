const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
  res.status(200).json('Hello world');
});

server.get('/api/test', (req, res) => {
  res.status(200).json('Hello world from test');
});

module.exports = server;
