var express = require('express');
var router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Load input validation
const validateJoinInput = require("../validation/join");
const validateLoginInput = require("../validation/login");

var UserModel = require('../models/user.model'); 

var bodyParser = require('body-parser');
router.use(bodyParser.json());

/*GET all members
router.get('/', (req, res) =>{
	//res.json(JSON_OBJECT) to return a javascript object as json
	res.json(users);
});*/

router.post('/join', (req, res) => {
	console.log("EH");
	if(!req.body){
		return res.status(400).send('Request body missing');
	}
	const { errors, isValid } = validateJoinInput(req.body);
	// Check validation
	  if (!isValid) {
	  	console.log("error");
	    return res.status(400).json(errors);
	  }
	var user = new UserModel({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password
	});
	console.log(`first ${req.body.firstName} last ${req.body.lastName} email ${req.body.email}`);
	user.save()
	.then(doc => {
		if(!doc || doc.length===0) {
			return res.status(500).send(doc); //internal server error
		}
		res.status(201).send(doc); //"Created" status
	})
	.catch(err => {
		res.status(500).json(err)
	});
});

router.get('/login', (req, res) => {
	UserModel.findOne({
		email: req.query.email
	})
})

module.exports = router;