var mongoose = require("mongoose", { useUnifiedTopology: true });
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://mtoffl01:Mikayla1997!@ds127958.mlab.com:27958/user_info', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
//const db = require("./config/keys").mongoURI;

var userSchema = new mongoose.Schema({
  firstName: {type: String, 
              lowercase: true, 
              required: [true, "can't be blank"], 
              match: [/[a-zA-Z]+/, 'is invalid']
            },
  lastName: {type: String, 
              lowercase: true, 
              required: [true, "can't be blank"], 
              match: [/[a-zA-Z]+/, 'is invalid']
            },
  email: {type: String, 
          lowercase: true, 
          required: [true, "can't be blank"], 
          match: [/\S+@\S+\.\S+/, 'is invalid'],
          unique: true 
        },
  password: {type:String,
             required:true
        }
});

/*var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../node_modules/config').secret;

var userSchema = new mongoose.Schema({
    firstName: {type: String, required: [true, "can't be blank"], match: [/[a-zA-Z]+/, 'is invalid'], index: true},
    lastName: {type: String, required: [true, "can't be blank"], match: [/[a-zA-Z]+/, 'is invalid'], index: true},
    email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    hash: String,
    salt: String
});

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function(password) {
 var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
 return this.hash === hash;
};

UserSchema.methods.generateJWT = function() {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000),
  }, secret);
};

UserSchema.methods.toAuthJSON = function(){
  return {
    username: this.username,
    email: this.email,
    token: this.generateJWT(),
    bio: this.bio,
    image: this.image
  };
};*/

module.exports = mongoose.model('User', userSchema);
