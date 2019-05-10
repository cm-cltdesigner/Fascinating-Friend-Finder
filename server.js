// Dependencies
var express = require('express');
var path = require('path');
var fs = require('fs');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Static Files
app.use(express.static('app/public'));


// Routers
require('./app/routing/apiRoutes.js')(app, path);
require('./app/routing/htmlRoutes.js')(app, path);

app.listen(PORT, function() {
    console.log("Hey, I\'m listening... on port " + PORT);
})
