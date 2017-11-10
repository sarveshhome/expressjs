var express = require("express");
var app = express();

var port = process.env.PORT || 8080;

//GET - Requests data from a specified resource
//http://localhost:8080/
app.get('/', function(req, res) {
    res.send('hello world');
});

//Submits data to be processed to a specified resource
// POST method route
app.post('/req', function(req, res) {
    res.send('POST request to the / req');
});

//http://localhost:8080/user  in postman and select put 
app.put('/user', function(req, res) {
    res.send('Got a PUT request at /user');
});

app.delete('/del', function(req, res) {
    res.send('Got a DELETE request at Node');
});

// http://localhost:8080/about check in browser
app.get('/about', function(req, res) {
    res.send('about page');
});

app.listen(port, function() {
    console.log("Server start at port http://localhost:" + port);
});