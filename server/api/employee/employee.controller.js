const { json } = require('express');
const employeeModel = require('./employee.model');

exports.getemployee = (req, res, next) => {
    employeeModel.find().then((employee) => {
        res.status(200).json({
            employee : employee,
        });
    }).catch((err) => {
        res.status(500).json({
            error: err,
        });
    });
};



exports.createUser = (req, res, next) => {
    const newemploye = new employeeModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email:req.body.email,
        gender:req.body.gender,
        phoneNo:req.body.phoneNo,
        
    }); 

    newemploye
    .save()
    .then((result) => { 
        res.status(201).json({
            employee: result
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
}

exports.getUserById = (req, res, next) => {
    employeeModel.findById(req.params.id).then((result) => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(200).json({msg:"user not found"});
        }
    }).catch(err => {
        res.status(404).json({
            error: err
        });
    });
};

exports.deleteUserById=(req, res ,next)=>{
    employeeModel.findOneAndDelete(req.params.id).then((result)=>{
        res.status(200).json(result);

    }).catch(err => {
        res.status(404).json({
            error:err
        });
    });
};

exports.updateUser = (req, res, next) => {
    employeeModel.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res.status(202).json({ msg: 'User updated', data: result });
        }).catch(err => {
            res.status(404).json({ msg: 'User not found' });
        });
};

// userController.js
exports.login = (req, res, next) => {
    const { email, password } = req.body;
  
    // Assuming UserModel.findOne is used for querying users by email
    UserModel.findOne({ email, password })
      .then((user) => {
        if (!user) {
          res.status(401).json({ message: 'Invalid credentials' });
        } else {
          // Here, you might generate a JWT token for authentication
          res.status(200).json({ message: 'Login successful', user });
        }
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  };
  


