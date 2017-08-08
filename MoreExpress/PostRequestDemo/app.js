var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

var friends = ['Tony', 'Miranda', 'Justin', 'Pierre', "Lilly"];


// GET requests
app.get('/', function(req, res){
    res.render('home');
});

app.get('/friends', function(req, res){
    
    
    res.render('friends', {friends: friends});
});

// POST requests
app.post('/addfriend', function(req, res){
    var newFriend = (req.body.newfriend);
    friends.push(newFriend);
    res.redirect('/friends');
});

// set server to listen to port / ip
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has been started!");
})