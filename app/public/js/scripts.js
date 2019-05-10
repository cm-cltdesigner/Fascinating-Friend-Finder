function createQuestions() {
	let q0 = "I'm a great listener.";
	let q1 = "I talk too much.";
	let q2 = "I hate meeting new people.";
	let q3 = "I don't like being bothered.";
	let q4 = "I'm a crowd pleaser.";
	let q5 = "I love enjoying my life.";
	let q6 = "I'm a extrovert.";
	let q7 = "I'm a introvert.";
	let q8 = "I'm a tree-hugger.";
	let q9 = "I love to travel.";
	let questionArray = [ q0, q1, q2, q3, q4, q5, q6, q7, q8, q9 ];
	return questionArray;
}

var questions = createQuestions();

$( "#questionDiv" ).append( '<div class="row"><div class="col-lg-12">' );
for ( var i = 0; i < questions.length; i++ ) {
	$( "#questionDiv" ).append( '<h3>Question ' + ( i + 1 ) + '</h3>' + '<p>' + questions[ i ] + '</p>' + 
	'<select class="chosen-select dropList" id="q' + i + '">' + '<option value=""></option>' + 
	'<option value="1">1 (Strongly Disagree)</option>' + 
	'<option value="2">2 (Disagree)</option>' + 
	'<option value="3">3 (Neutral)</option>' + 
	'<option value="4">4 (Agree)</option>' + 
	'<option value="5">5 (Strongly Agree)</option>' + '</select>' );
}

$( "#questionDiv" ).append( '<button type="submit" class="btn btn-primary" id="submitButton">Submit</button>' + '</div></div>' );
// Chosen Dropdown Setup
var config = {
	".chosen-select": {},
	".chosen-select-deselect": {
		allow_single_deselect: true
	},
	".chosen-select-no-single": {
		disable_search_threshold: 10
	},
	".chosen-select-no-results": {
		no_results_text: "Oh Sorry, Nothing Found!"
	},
	".chosen-select-width": {
		width: "95%"
	}
};


for (var selector in config) {
	$(selector).chosen(config[selector]);
}


// User Submit Section
$( "#submitButton" ).on( "click", function(event) {
	event.preventDefault();
	// Making sure everything is selected
	function userValidation() {
		// Correct validation
		let valid = true;
		if ($("#name").val() === "" ) {
			valid = false;
		}
		if ($("#image").val() === "" ) {
			valid = false;
		}
		// if ( $("#image").val().charAt( 4 ) !== ":" && $("#image").val().charAt( 5 ) !== ":" ) {
		// 	// if validation is incorrect
		// 	valid = false;
		// }
		// Check dropdown boxes for empty values (top values are always empty)
		$(".chosen-select").each( function() {
			if ( $(this).val() === "" ) {
				// If a valid option has not been selected, validation is incorrect
				valid = false;
			}
		} );
		// This function will return true if validation is correct, false if not true of course
		return valid;
	}
	// If validation is correct
	if ( userValidation() ) {
		//Ansewrs are stored
		var formAnswers = {
			"name": $("#name").val().trim(),
			"photo": $("#image").val().trim(),
			"answers": [
				parseInt( $( "#q0" ).val() ),
				parseInt( $( "#q1" ).val() ),
				parseInt( $( "#q2" ).val() ),
				parseInt( $( "#q3" ).val() ),
				parseInt( $( "#q4" ).val() ),
				parseInt( $( "#q5" ).val() ),
				parseInt( $( "#q6" ).val() ),
				parseInt( $( "#q7" ).val() ),
				parseInt( $( "#q8" ).val() ),
				parseInt( $( "#q9" ).val() )
			]
		};
		// POST to api/friends.
		$.post("/api/friends.js", formAnswers, function() {
			// Update the match modal with the correct name & image
			$("#friendNameDiv").html( "<h2>" + data.name + "</h2>");
			$("#friendImg").attr( "src", data.photo);
			// Show the match modal
			$("#myModal").modal("toggle");
		} );
	}
	// If the user validation failed
	else {
		alert( "Try Again! You missed a question!" );
	}
});