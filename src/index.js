require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');

const express = require('express');

const app = express();

app.use(express.json({limit: '10MB'}));

app.use(cors());
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
	
	next();
});

app.use(morgan('dev'));
app.use(require('./routes/routes'));
app.use(require('./middlewares/exceptions'));


app.listen(process.env.PORT || 8080);