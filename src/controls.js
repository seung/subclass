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

	$(".thisIsMyLaptop").on("click", function(event) {
		$(".p2, .p3").hide();
		$(".p1").show();
	});

	$(".p1").on("click", function(event) {
		$(".p1").hide();
		$(".p2").show();
	});

	$(".p2").on("click", function(event) {
		$(".p2").hide();
		$(".p3").show();
	});

	$(".p3").on("click", function(event) {
		$(".p3").hide();
		$(".p4").show();
	});

	$(".p4").on("click", function(event) {
		$(".p4").hide();
		$(".p5").show();
	});

	$(".p5").on("click", function(event) {
		$(".p5").hide();
		$(".p6").show();
	});

	$(".p6").on("click", function(event) {
		$(".p6").hide();
		$(".p7").show();
	});

	$(".p7").on("click", function(event) {
		$(".p7").hide();

	});



}