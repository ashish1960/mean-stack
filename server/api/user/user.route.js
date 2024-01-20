var express = require('express');
var router = express.Router();
const userController = require('./user.controller')

router.get('/', userController.getUsers);

router.post('/', userController.createUser);

router.get('/:id', userController.getUserById);

router.delete('/:id',userController.deleteUserById);



module.exports = router;