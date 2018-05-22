var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';



app.use(express.static(path.join(__dirname, 'public')));
// index route............................
app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, function(){
    console.log('Server is running on port :' + port , ip);
});