// NOTE: THIS IS THE API'S ROUTES
var fs = require('fs');

module.exports = function(app, path) {
	app.get('/api/friends', function(req, res) {
		fs.readFile("app/data/friends.js", "utf8", function(err, data) {
			if (err) {
				return console.log(err);
			} else {
				res.json(JSON.parse(data));
			}
		});
	});

	app.post('/api/friends', function(req, res) {
		// Closest match object
		var results = [];

		// Stringof JSON
		var postResponse = JSON.stringify(req.body);

		fs.readFile('app/data/friends.js', function (err, data) {
			// Reading the existing array
		    var friendFile = JSON.parse(data);

		    // Storing the difference in values
		    var closestMatch = 0;
		    var matchScore = 999;

		    // Firing to loop through the answers
		    for (var i = 0; i < friendFile.length; i++) {
		    	var spaceBetween = 0;
		    	for (var i = 0; i < friendFile[i]['answers[]'].length; i++) {
		    		spaceBetween += Math.abs((parseInt(req.body['answers[]'][i]) - parseInt(friendFile[i]['answers[]'][i])));
				}
				if(spaceBetween <= matchScore) {
					matchScore = spaceBetween;
					closestMatch = i;
		    	}
		    }
		    console.log("Closest match: " + friendFile[closestMatch].name);
		    results.push(friendFile[closestMatch]);

		    // Add the new person to the existing array
		    friendFile.push(JSON.parse(postResponse));

		    // // Push back the updated results
		    fs.writeFile("app/data/friends.js", JSON.stringify(friendFile));
			res.send(results[0]);

		});
	});
}
