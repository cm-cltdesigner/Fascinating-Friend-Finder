<<<<<<< HEAD
// NOTE: THIS IS THE HTML ROUTES
=======
// NOTE: THIS FOR HMTL ROUTES
>>>>>>> 5b4f46a0aa9a19bb9bef8503e6446eb9851dcba5

module.exports = function(app, path) {
	app.get("/", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
}
