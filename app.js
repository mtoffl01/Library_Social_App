
//tutorial: https://www.youtube.com/watch?v=L72fhGm1tfE
//use nodemon for the app starter that listens for changes

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var userRoute = require('./routes/users')
const path = require('path');
const logger = require('./middleware/logger');
// var mongoose = require("mongoose", { useUnifiedTopology: true });
// mongoose.Promise = global.Promise;

app.use(bodyParser.json());
// mongoose.connect('mongodb://mtoffl01:Mikayla1997!@ds127958.mlab.com:27958/user_info', { useNewUrlParser: true });

//use is a method when we wanna use middleware
//all its local files including js and css files
app.use(logger);

//Body parser middleware

//for form submissions....
//app.use(express.urlencoded({extended: false})); //when false, can handle url encoded data

//Users api routes - not using right now
app.use(userRoute);
app.use(express.static(path.join(__dirname, 'public'))); //static serves an entire front-end with 



/*USERS section.
var userSchema = new mongoose.Schema({
	firstName: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/[a-zA-Z]+/, 'is invalid'], index: true},
	lastName: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/[a-zA-Z]+/, 'is invalid'], index: true},
	email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
	//status: {type: Boolean, default: true }
});

var User = mongoose.model("User", userSchema);

app.post('/users/join', (req, res) => {
	var myData = new User(req.body);
	myData.save()
	.then(item => {
		res.send("Name saved to database");
	})
	.catch(err => {
		res.status(400).send("Unable to send to DB");
	});
});*/

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log("Server listening on port " + PORT);
});