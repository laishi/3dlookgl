var express = require("express");
var app = express();


app.use(express.static(__dirname + '/3dlook'));


app.get('/', function(req, res) {
    res.sendFile('/index.html');
});

app.listen(3030);

console.log("http://148.70.212.82:3030/");