const express = require('express');

const routerRequest = express.Router();

const bookRoutes = require('./books/books.routes');

routerRequest.use('/books', bookRoutes);

module.exports = routerRequest;