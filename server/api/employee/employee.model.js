const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    
    
    firstName: String,
    lastName: String,
   
});

const model = mongoose.model('employee', employeeSchema);

module.exports = model;