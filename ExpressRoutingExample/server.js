var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var router = express.Router();


app.get('/', function(req, res) {
    res.send('this is simple routing <div><a href="/">Home</a></div><div><a href="/about">About</a></div>');
});

router.get('/about', function(req, res) {
    res.send('about page!<div><a href="/">Home</a></div><div><a href="/about">About</a></div>');
});
app.use('/', router);


app.listen(port, function() {
    console.log('Server started at http://localhost:' + port);
});