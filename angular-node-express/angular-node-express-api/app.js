const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const generate_uid = require('./routes/generate_uid');
const customer = require('./routes/customer');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/generate_uid', generate_uid);

module.exports = app;
