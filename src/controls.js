var setupControls = function(danceFloor){
  $(".clickable").on("click", function(event){
    var dancerMakerName = $(this).data("dancer-creator");
    danceFloor.makeDancer(dancerMakerName);
  });

  $('.description').on("click", function() {
    $('.modal').modal('show');
  });
};


var bindListeners = function(){
  $('span.dancer').on("click", function(event){
    var dancerid = $(this).data("idnumber");
    var chosendancer= dancers[dancerid];
    makeADancerASizeDancer(chosendancer);
  });
};
