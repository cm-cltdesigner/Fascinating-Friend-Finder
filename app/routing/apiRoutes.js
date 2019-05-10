// NOTE: THIS IS THE API'S ROUTES
var fs = require('fs');
var friendsResults = require('../data/friends');

module.exports = function (app, path) {
	app.get('/api/friends', function (req, res) {
	});

	app.post('/api/friends', function (req, res) {
		var results = [];
		var postResponse = req.body;
		var closestMatch = 40;
		var closestFriend = 0
		// Firing to loop through the answers
		for (var i = 0; i < friendsResults.length; i++) {
			var spaceBetween = 0;
			for (var j = 0; j < postResponse.answers.length; j++) {
				spaceBetween += Math.abs((parseInt(postResponse.answers[j]) - parseInt(friendsResults[i].answers[j])));
			}
			if (spaceBetween <= closestMatch) {
				closestMatch = spaceBetween;
				closestFriend = i;
			}
		}
		results.push(friendsResults[closestFriend]);
		res.send(results[0]);
	});
}