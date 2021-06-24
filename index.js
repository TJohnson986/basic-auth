'use strict';

require('dotenv');
const server = require('./server.js');
const PORT = process.env.PORT || 3000;

server.start(PORT);