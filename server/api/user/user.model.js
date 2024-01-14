const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
});

const model = mongoose.model('user', userSchema);

module.exports = model;