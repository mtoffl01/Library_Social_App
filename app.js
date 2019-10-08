
//tutorial: https://www.youtube.com/watch?v=L72fhGm1tfE
//use nodemon for the app starter that listens for changes

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var userRoute = require('./routes/users')
const path = require('path');
const logger = require('./middleware/logger');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//use is a method when we wanna use middleware
//all its local files including js and css files
app.use(logger);

//Body parser middleware

//for form submissions....
//app.use(express.urlencoded({extended: false})); //when false, can handle url encoded data

//Users api routes - not using right now
app.use(userRoute);
app.use(express.static(path.join(__dirname, 'public'))); //static serves an entire front-end with 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log("Server listening on port " + PORT);
});