const express = require('express');
const route = require('./routes/routes');

// request listener
const app = express();
// serve static content
app.use(express.static('public'));
app.use(express.static('views'));

app.use('/', route);

module.exports = app;