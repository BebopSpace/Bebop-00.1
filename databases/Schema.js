const mongoose = require('mongoose');
const db = require('./dbconnect.js');
const Schema = mongoose.Schema
// sign up schema
const signUp = new Schema({
    name: 'string',
    lastName: 'string',
    email: 'string',
    age: 'Number',
    password: 'string',
});
const Sign = mongoose.model('sign', signUp);

module.exports = Sign;

// // login schema
// const logIn = new Schema({
//     name: 'string',
//     password: 'string',
// });
// const Log = mongoose.model('sign', logIn);
// module.exports = Log;