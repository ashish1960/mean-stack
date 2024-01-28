const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    
    
    firstName: String,
    lastName: String,
    email: { type: String, required: true },  //email should be unique for every user
    phoneNo: String,
    gender: String,
    
   
});

const model = mongoose.model('employee', employeeSchema);

module.exports = model;