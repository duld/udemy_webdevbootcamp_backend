var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('home');
    //res.send("Hello and welcome to the home page!");
});


app.get('/fallinlovewith/:thing', function(req, res){
    var thing = req.params.thing;
    res.render('love', {thingVar: thing});
});


app.get('/posts', function(req, res){
    var posts = [
        { title: "Post1", author : "Susy"},
        { title: 'One Tough Toad', author : 'Susy'},
        { title: 'What is a pomsky?', author : 'Susy'}
    ];
    
    res.render('posts', {posts: posts});
})

// start the app
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is up running!");
})