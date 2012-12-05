var setupControls = function(danceFloor){
  $(".clickable").on("click", function(event){
    var dancerMakerName = $(this).data("dancer-creator");
    danceFloor.makeDancer(dancerMakerName);
  });


  //Display info Box
  $('#about').on('click', function (){ 
    event.preventDefault();
    $('#dialog').fadeIn();
  }); 
}