const express = require('express');
const router = express.Router();
const users = require('../Users'); //importing a module from the exports in file Users.js

//GET all members
router.get('/', (req, res) =>{
	//res.json(JSON_OBJECT) to return a javascript object as json
	res.json(users);
});

//GET single member by id
router.get('/:id', (req, res) => {
	//first, a method to check if this member id exists in the set
	const found = users.some(user => user.id == parseInt(req.params.id));
	if(found){
			res.json(users.filter(user => user.id === parseInt(req.params.id)));
		//res.json to return the object as json
		//filter() method filters an array for a specific key
		/* === means value and type must be the same - in our users object, id is an int,
		 * but in out url body params, its a string. So we have to parseInt on the param.
		 */
	} else { //alert the user of a bad request, status 400
		res.status(400).json({msg: `No user with id of ${req.params.id}`});
	}
});

//Create member
//in a database, MONGODB will generate a random id for you - no need for that here.
router.post('/', (req, res) => {
	var newUser = {
		id: 3,
		name: req.body.name
	}
	//name is necessary for user addition
	if (!newUser.name){
		return res.status(400).json({msg: "Plz include name"});
	}
	users.push(newUser);
	//for db, instead of push you'd do users.save(newUser) or similar.
	res.json(users);
});

//Update member - "put" is for updates
//if user exists, update its name if the user has updated a name (could be a diff field if more fields)
router.put('/:id', (req, res) => {
	//first, a method to check if this member id exists in the set
	const found = users.some(user => user.id == parseInt(req.params.id));
	if(found){
			var updUser = req.body;
			users.forEach(user => {
				if(user.id === parseInt(req.params.id)) {
					//turnary operator
					user.name = updUser.name ? updUser.name :user.name;
					res.json({msg: 'User updated ', user});
				}
			})
	} else { //alert the user of a bad request, status 400
		res.status(400).json({msg: `No user with id of ${req.params.id}`});
	}
});

//Delete member
router.delete('/:id', (req, res) => {
	//first, a method to check if this member id exists in the set
	const found = users.some(user => user.id == parseInt(req.params.id));
	if(found){
		res.json({
			msg: 'User deleted',
			users: users.filter(user => user.id !== parseInt(req.params.id))
		});
	} else { //alert the user of a bad request, status 400
		res.status(400).json({msg: `No user with id of ${req.params.id}`});
	}
});

module.exports = router;