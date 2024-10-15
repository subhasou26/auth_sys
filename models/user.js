// models/User.js
const mongoose = require('mongoose');
const {isEmail}=require('validator');
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true,"Please enter a emaill"],
    unique: true,
    lowercase:true,
    validate:[isEmail,"please enter valid email"]
  },
  password: {
    type: String,
    required: [true,"Please enter an password"],
    minlength:[6,'Minimum password length is 6']
  },
  role: {
    type: String,
    enum: ['admin', 'employee', 'manager', 'municipal', 'ngo','public'],
    default:'public',
    
  },
  address: { 
    street: {type:String,required:true},
    city: {type:String,required:true},
    state: {type:String,required:true},
    zipcode: {type:String,required:true},
   
  },


  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', UserSchema);
