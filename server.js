//server.js
//Here we are given the server all of its modules

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
app.use(morgan('dev'));
//parse the app as json
app.use(bodyParser.json());

//connect db
mongoose.connect('mongodb://sc0789:Crowdwitts2016@ds119380.mlab.com:19380/mvpdb')

//server side model
var myMember = mongoose.model('Info', new mongoose.Schema({ "name": String, "time": String, "status": Boolean }));
//?




// var myMember = mongoose.model('Test', new Schema({ name: "Steven", time: "2pm", status: true});
// }));

//services


//controller

//routers

app.get('/', function(req,res){
	res.sendFile(__dirname + '/Client/index.html')
});


// app.get('/api/', function(req,res){
// 	res.send('The time has begun!')
// });


// routers for both check-in and check-out
app.post('/api/checkin', function(req,res){
	res.send("Stop");
});

// app.post('/api/checkout', function(req,res){
// 	res.send('hi');
// });










app.listen(3000);
console.log("Work!");