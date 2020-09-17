var express = require('express');
var app = express();
// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// ------------------------------------------------
const port = 3003;
//  mongoose
const User = require('./databases/Schema.js')
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/account')
const db = require('./databases/dbconnect.js')

app.use(express.static(__dirname + '/client/dist'))

// User --- sign up
app.post('/signup', (req, res) => {
    const user = new User(req.body)
    console.log('test',req.body)
    console.log(user)
    user.save({})
        .then(res => res.send('saved successfully !'))
        .catch(err => res.status(404).send('[server side]', err))
})
// app.post('/signup', (req, res) => {
//     const user = new User(req.body)
//     user.find({})
//         .then(res => res.send('saved successfully !'))
//         .catch(err => res.status(404).send('[server side]', err))
// })
// app.get('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=ipac&where=pl_kepflag=1',(req, res) =>{

//  .then(res => res.send(results))
//  .catch( err => console.log('[server side]',err))

// })


app.listen(port, () => {
    console.log(`I'm listeting on port  ${port}`);
})

// // log in
// app.post('/login', (req, res) => {
//     const client = new Log(req.body)
//     client.save({})
//         .then(res => res.send('saved successfully !'))
//         .catch(err => res.status(404).send('[server side]', err))
// })