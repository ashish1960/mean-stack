var express = require('express');
var employeeRouter = require('./api/employee/employee.route');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.mongo_db).then( () => {
  console.log("Connected to MongoDB");
}).catch( (err) => {
  console.log(err);
})

var app = express();
var userRouter = require('./api/employee/user.route');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers','*');
  next();
});
app.use(express.json());
app.use('/employee', employeeRouter);
app.use('/user', userRouter);

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
