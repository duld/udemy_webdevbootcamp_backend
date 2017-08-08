var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// GET requests
app.get('/', function(req, res){
    res.render('home');
});

// POST requests


// set server to listen to port / ip
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has been started!");
})