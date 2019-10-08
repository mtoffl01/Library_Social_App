const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateJoinInput(data){
	let errors ={};
	//if data.name not empty, then set to empty string
	data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
	data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
	data.email = !isEmpty(data.email) ? data.email : "";
	data.password = !isEmpty(data.password) ? data.password : "";

	if(Validator.isEmpty(data.firstName)){
		errors.firstName = "First name required";
	}
	if(Validator.isEmpty(data.lastName)){
		errors.lastName = "Last name required";
	}

	if(Validator.isEmpty(data.email)) {
		errors.email = "Email field required";
	} else if(!Validator.isEmail(data.email)){
		errors.email = "Email is invalid";
	}

	if(Validator.isEmpty(data.password)){
		console.log("hi");
		errors.password = "Password field required";
	}

	return{
		errors,
		isValid: isEmpty(errors)
	};

};
