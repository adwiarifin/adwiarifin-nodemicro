require('dotenv').config()
require('express-group-routes');

const express = require('express');
const mongoose = require('mongoose');
const debug = require('debug')('adwiarifin-nodemicro:app');
const routes = require('./routes');

process.on('uncaughtException', (e) => {
    console.error(e);
    process.exit(0);
});

////////// DATABASE //////////
console.log('MONGODB_URI', process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => debug(error));
db.once('open', () => debug('connected to database'));
////////// DATABASE //////////

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes(app);

module.exports = app;