console.log("Our Express App will go Here");

var express = require('express');
var app = express();

// '/' => "hi there!"
app.get("/", function(req, res){
   res.send('Hi there!');
});


// "/bye" => "goodbye!"
app.get('/bye', function(req, res){
    res.send('goodbye!');
})

// "/dog" => "Meow!"
app.get('/dog', function(req, res){
    console.log('someone made a request to /dog!');
    res.send("Woof!");
})

// Tell express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server has started!');
});