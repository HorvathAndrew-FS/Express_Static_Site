const http = require('http');
require('dotenv').config();
const express = require('express');

// request listener
const app = express();
app.get('/', (req, res) => {
    res.send("This is the wrong way...");
});

const router = express.Router();

http.createServer(app).listen(process.env.port, () => {
    console.log(`Server is running on port: ${process.env.port}`);
});