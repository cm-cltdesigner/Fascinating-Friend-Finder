// Dependencies
var express = require('express');
var path = require('path');
var fs = require('fs');

// Sets Express App
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Static Files
app.use(express.static('app/public'));


// Routers
require('./app/routing/apiRoutes.js')(app, path);
require('./app/routing/htmlRoutes.js')(app, path);


app.listen(PORT, function() {
    console.log("I\'m listening... on port " + PORT);
})
