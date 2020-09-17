const mongoose = require('mongoose');
const db = require('./dbconnect.js');
const Schema = mongoose.Schema
mongoose.Promise = global.Promise;
// sign up schema
const user = new Schema({
    name: String,
    lastName: String,
    email: String,
    age: Number,
    password: String,
});
const User = mongoose.model('user', user);

module.exports = User;

// // login schema
// const logIn = new Schema({
//     name: 'string',
//     password: 'string',
// });
// const Log = mongoose.model('sign', logIn);
// module.exports = Log;