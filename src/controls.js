var setupControls = function(danceFloor){
  $(".clickable").on("click", function(event){
    var dancerMakerName = $(this).data("dancer-creator");
    danceFloor.makeDancer(dancerMakerName);
  });

  $(".clickable-mixin").on("click", function(event){
    var dancerMakerName = $(this).data("dancer-mixin");
    danceFloor.addMixin(dancerMakerName);
  });


  //Display info Box
  $('#about').on('click', function (){ 
    event.preventDefault();
    $('#dialog').fadeIn();
  }); 
}

