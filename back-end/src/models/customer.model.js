let mongoose = require('mongoose');

const server = 'ds127958.mlab.com:27958';
const database = 'user_info';
const user = 'mtoffl01';
const password = 'Mikayla1997!';

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

//mongoose.connect('mongodb://mtoffl01:Mikayla1997!@ds127958.mlab.com:27958/user_info');

let customerSchema = new mongoose.Schema({
	//later, first and last name both required
	name: String,
	//name also required
	email:{
		type: String,
		required: true,
		unique: true
	}
	//password?
	//course list
	//current room?
	//current status?
	//friends list
});

module.exports = mongoose.model('Customer', customerSchema);