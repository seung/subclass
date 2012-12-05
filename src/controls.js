var setupControls = function(danceFloor){
  $(".clickable").on("click", function(event){
    var dancerMakerName = $(this).data("dancer-creator");
    danceFloor.makeDancer(dancerMakerName);
  });

	$("#lightboxButton").on("click", function(event) {
		$("#lightbox").show();
	});

	$("#lightboxClose").on("click", function(event) {
		$("#lightbox").hide();
	});

}


// var defaultThis = window;
// var theObj = { a: 1 }

// var thisTester = function(a, b,) {
//   console.log(this)
// }

// thisTester()  # prints out window
// thisTester.call()  # identical to above
// thisTester.call(theObj)  # prints out the obj
// thisTester.call(theObj, 1, 2, 3)  # prints out the obj