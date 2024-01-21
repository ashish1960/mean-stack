var express = require('express');
var router = express.Router();
const usersController = require('./user.controller')

router.post('/register', usersController.registerusers);

router.post('/login',usersController.login);

module.exports = router;