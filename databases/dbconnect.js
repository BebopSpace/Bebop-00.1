const mongoose =  require('mongoose');
const mongoUrl = 'mongodb://localhost/account';

const db = mongoose.connect(mongoUrl);

module.exports = db;
