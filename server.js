var express = require('express');
var app = express();
// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// ------------------------------------------------
const port = 3002;
//  mongoose
const User = require('./databases/Schema.js')
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/account')
const db = require('./databases/dbconnect.js')

app.use(express.static(__dirname + '/client/dist'))

// User --- 
app.post('/signup', (req, res) => {
    const user = new User(req.body)
    user.save({})
        .then(res => res.send('saved successfully !'))
        .catch(err => res.status(404).send('[server side]', err))
})
app.post('/login',async (req, res) => {
    try{
        console.log(req.body)
        const data = await User.find({})
        console.log('data===>',data)
        for(var d of data) {
            // console.log('d',d.name, d.password)
            for(var e in req.body) {
                console.log('req.body',req.body.name,req.body)
               
                if(d.name === req.body.name && d.password === req.body.password) {
                   res.send('checked successfully !')
                }else{
                    console.log('nope')
                }
            }
        }
    }catch(e){
        console.log(e)
    }
  
})
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