require('dotenv').config();
const morgan = require('morgan');

const express = require('express');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(require('./routes/routes'));

app.listen(process.env.PORT || 8080);