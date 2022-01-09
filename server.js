require('dotenv').config()
const express = require('express');
const cors = require('cors');
const http = require('http');
const port = process.env.PORT;
// const routes = require('./routes/routes');
const app = express();

app.use(cors());
app.use(express.json({extended: false}));

// app.use('/', routes);

const server = http.createServer(app);
server.listen(port, () => {
    console.log('Running ... ' + port);
})