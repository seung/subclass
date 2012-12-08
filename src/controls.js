var setupControls = function(danceFloor){
  $(".clickable").on("click", function(event){
    var dancerMakerName = $(this).data("dancer-creator");
    if(dancerMakerName === 'moshPitDancer'){
    	for(i=0;i<10;i++){
    		danceFloor.makeDancer(dancerMakerName);
    	}
    } else { danceFloor.makeDancer(dancerMakerName);
    }
	});
  $(".lightSwitch").on("click", function(event){
  	$("#lightBox").fadeToggle();
  });
}