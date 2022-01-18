require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json())
app.use(require('./routes/routes'));

app.listen(process.env.PORT || 8080);