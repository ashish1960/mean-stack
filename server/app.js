var express = require('express');
var usersRouter = require('./api/user/user.route');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.mongo_db).then( () => {
  console.log("Connected to MongoDB");
}).catch( (err) => {
  console.log(err);
})

var app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});
app.use(express.json());
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
