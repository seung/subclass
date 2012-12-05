var setupControls = function(danceFloor){
  $(".clickable").on("click", function(event){
    var dancerMakerName = $(this).data("dancer-creator");
    danceFloor.makeDancer(dancerMakerName);
  });

    // Border-square Mixin execution.
  $("#border-square-mixin").on("click", function() {
  	for (var i in window.dancers) {
  		if (Math.random() > .9) {
  			mixinSquare(window.dancers[i]);
  		}
  		// Math.random() > .9 ? mixinSquare(window.dancers[i]) : ;
  	}
  });
}