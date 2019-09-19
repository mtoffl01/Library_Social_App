let express = require('express');
let router = express.Router();



//Query string => query property on the request object
// localhost:3000/person?name=mikaya&age=22
router.get('/person', (req, res)=> {
	if(req.query.name){
		res.send(`You have requested a persona ${req.query.name}`);
	}
	else{
		res.send('You have requested a personnnn');
	}
});

// Params property on the request object
// localhost:3000/person/:name , altho this hasn't been working, sooo
router.get('/person/:name', (req, res)=> {
	res.send(`You have requested a person hel ${req.params.name}`)
});

router.get('/error', (req, res) => {
	throw new Error('This is a forced error');
});

module.exports = router;