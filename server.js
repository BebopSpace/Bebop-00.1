var  express = require('express');
var app = express();
// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// ------------------------------------------------
const  port = 3003; 

app.use(express.static(__dirname + '/client/dist'))

// app.get('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=ipac&where=pl_kepflag=1',(req, res) =>{

//  .then(res => res.send(results))
//  .catch( err => console.log('[server side]',err))

// })


 app.listen(port,() => {
     console.log(`I'm listeting on port  ${port}`);
 })