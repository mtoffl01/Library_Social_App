let customerModel = require('../models/customer.model');
let express = require('express');
let router = express.Router();

// Create a new customer
// localhost:3000/customer
router.post('/customer', (req, res) =>{
	// req.body
	if (!req.body) {
		return res.status(400).send('Request body is missing.');
	}

	/*let user = {
		name: 'first last',
		email: 'h@gmail.com'
	}*/
	let model = new customerModel(req.body);
	model.save()
		.then(doc => {
			if((!doc) || doc.length === 0) {
				return res.status(500).send(doc)
			}
			res.status(201).send(doc) //201 = resource was created
		})
		.catch(err => {
			res.status(500).json(err)
		})
})

router.get('/customer', (req, res) =>{
	if(!req.query.email){
		return res.status(400).send('Missing URL parameter: email');
	}

	customerModel.findOne({
		email: req.query.email
	})
		.then(doc => {
			res.json(doc);
		})
		.catch(err => {
			res.status(500).json(err);
		})
})

//update the existing customer (U in the crud)
router.put('/customer', (req, res) => {
	if(!req.query.email){
		return res.status(400).send('Missing URL parameter: email');
	}

	customerModel.findOneAndUpdate({
		//query the db based on the url query string email
		email: req.query.email
	}, req.body, {
		new: true
	})
		.then(doc => {
			res.json(doc);
		})
		.catch(err => {
			res.status(500).json(err);
		})
})

// DELETE
router.delete('/customer', (req, res) => {
	if(!req.query.email){
		return res.status(400).send('Missing URL parameter: email');
	}

	customerModel.findOneAndRemove({
		//query the db based on the url query string email and then remove that
		email: req.query.email
	}) 
		.then(doc => {
			res.json(doc);
		})
		.catch(err => {
			res.status(500).json(err);
		})
})

module.exports = router