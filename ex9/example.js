var express = require('express');
var app = express();

app.get('/example', function (req, res) {
    res.send('<p>Firstname: ' + req.query['firstname'] + '</p><p>Lastname: ' + req.query['lastname'] + '</p><p>Password: ' + req.query['password'] + '</p><p>Sex: ' + req.query['sex'] + '</p><p>AboutYou: ' + req.query['aboutyou'] + '</p>');
});

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});
