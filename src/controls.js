var setupControls = function(danceFloor){
  $(".clickable").on("click", function(event){
    var dancerMakerName = $(this).data("dancer-creator");
    danceFloor.makeDancer(dancerMakerName);
  });
  $("#lightSwitch").on("click", function(event){
  	$("#lightBox").fadeIn();
  });
  $("#lightBox").on("click", function(event){
  	$("#lightBox").fadeOut();
  });
}