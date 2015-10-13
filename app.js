var express = require('express');
var app = express();
var server = require('http').Server(app);

var sh = require("socket.io")(server);

app.use(express.static('public'));

var flag = true;

sh.on('connection', function (socket) {
    console.log("Connected");
    socket.emit('hello', {
        d: "Hello Spooners"
    });

    socket.on('data', function (_d) {
        var s = _d.input;
        var result = ""
        if(flag){
            result =s.toUpperCase(); 
        } else {
            result = s.split("");
            result = result.length;
        }
        socket.emit('data_s', {
            d: result
        });
    });

});

app.get("/caps", function (req, res) {
    flag = true;
    res.end("Will Set to CAPS");
});

app.get("/count", function (req, res) {
    flag = false;
    res.end("Will Count");
});


server.listen(8080, null, null, function () {
    console.log("Server listening at http://::8080");
});