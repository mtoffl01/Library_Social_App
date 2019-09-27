
//use nodemon for the app starter that listens for changes
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const path = require('path');
const logger = require('./middleware/logger');


var mongoUri = process.env.MONGODB_URI || 'mongodb://mtoffl01:Mikayla1997!@ds127958.mlab.com:27958/user_info';

//use is a method when we wanna use middleware
app.use(express.static(path.join(__dirname, 'public'))); //static serves an entire front-end with 
//all its local files including js and css files
app.use(logger);

//Body parser middleware
//app.use(bodyParser.json());
app.use(express.json());
//for form submissions....
app.use(express.urlencoded({extended: false})); //when false, can handle url encoded data

//Users api routes
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log("Server listening on port " + PORT);
});