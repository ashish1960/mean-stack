var express = require('express');
var router = express.Router();
const employeeController = require('./employee.controller')

router.get('/', employeeController.getemployee);

router.post('/', employeeController.createUser);

router.get('/:id', employeeController.getUserById);

router.delete('/:id',employeeController.deleteUserById);

router.put('/:id', employeeController.updateUser);

router.post('/login', employeeController.login)


module.exports = router;