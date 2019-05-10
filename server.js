// Dependencies
var express = require('express');
var path = require('path');
var fs = require('fs');

<<<<<<< HEAD
// Sets up the Express App
=======
// Sets Express App
>>>>>>> 5b4f46a0aa9a19bb9bef8503e6446eb9851dcba5
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
<<<<<<< HEAD
    console.log("Hey, I\'m listening... on port " + PORT);
})
=======
    console.log("I\'m listening... on port " + PORT);
})
>>>>>>> 5b4f46a0aa9a19bb9bef8503e6446eb9851dcba5
