var express = require('express');
var app = express();
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var  ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

// index route............................
app.get('/', function (req, res, next) {
    res.send("sparrow is work");
});

app.listen(port, function(){
    console.log('Server is running on port :' + port , ip);
});