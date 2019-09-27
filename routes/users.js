var UserModel = require('../models/user.model'); 
var express = require('express');
var router = express.Router();

/*GET all members
router.get('/', (req, res) =>{
	//res.json(JSON_OBJECT) to return a javascript object as json
	res.json(users);
});*/

router.post('/join', (req, res) => {
	if(!req.body){
		return res.status(400).send('Request body missing');
	}
	var user = new UserModel({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email
	});
	console.log(`first ${req.body.firstName} last ${req.body.lastName} email ${req.body.email}`);
	user.save()
	.then(doc => {
		if(!doc || doc.length===0) {
			console.log("EH");
			return res.status(500).send(doc); //internal server error
		}
		res.status(201).send(doc); //"Created" status
	})
	.catch(err => {
		res.status(500).json(err)
	});
});

module.exports = router;