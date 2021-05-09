const express = require('express');
const routes = require('./routes');
require('express-group-routes');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes(app);

module.exports = app;