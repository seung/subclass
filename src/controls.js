var setupControls = function(danceFloor){
  $(".clickable").on("click", function(event){
    var dancerMakerName = $(this).data("dancer-creator");
    danceFloor.makeDancer(dancerMakerName);
  });
   $(".clickhere").on("click", function(event){
    var trainingDancer = $(this).data("dancer-changer");
    dancerChanger(trainingDancer, window.dancers);
  });
}
