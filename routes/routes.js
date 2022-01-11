const express = require('express');

const routerRequest = express.Router();

const bookRoutes = require('./book.routes');
const authorRoutes = require('./author.routes')

routerRequest.use('/book', bookRoutes);
routerRequest.use('/author', authorRoutes);

module.exports = routerRequest;