/*
1. create a brand new express app from scratch
2. create a package.json using 'npm init' and add express as a dependency
3. in your main app.js file, add 3 different routes:

visiting "/" should print "Hi there, wlecome to my assignment!"

visiting '/speak/pig' shoul dprint 'the pig says "Oink"'
visiting '/speak/cow' shoul dprint 'the cow says "Moo"'
visiting '/speak/dog' shoul dprint 'the dog says "Woof Woof!"'
===============================================================
visiting '/repeat/hello/3' shoul dprint 'the pig says "hello hello hello"'
visiting '/repeat/hello/5' shoul dprint 'the pig says "hello hello hello hello hello"'
visiting '/repeat/blah/2' shoul dprint 'the pig says "blah blah"'


any other routes should return/print
"sorry, page not found..what are you doing with your life?"
*/

var express = require('express');

var app = express();

// root
app.get('/', function(req, res){
    res.send("Hi there, wlecome to my assignment!");
});

// animal noises //
// pig //
app.get('/speak/pig', function(req, res){
    res.send("<h1>Oink!</h1>");
});

// cow //
app.get('/speak/cow', function(req, res){
    res.send("<h1>Moo</h1>!");
});

// dog //
app.get('/speak/dog', function(req, res){
    res.send("<h1>Woof Woof!</h1>");
});

// repeat strings // 
app.get('/repeat/:saying/:count', function(req, res){
    var out = "<h1>";
    for (var i=0; i < req.params.count; i++){
        out += req.params.saying + ' ';
    }
    res.send(out + "</h1>");
})



// catachall
app.get('*', function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});



// listen on port and ip
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server startup!");
})