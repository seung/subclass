var setupControls = function(danceFloor){
  /* This function sets up the click handlers for the create-dancer
   * buttons on index.html. You shouldn't need to alter this file.
   * As long as the 'data-dancer-creator' attribute of a
   * class="clickable" dom node matches one of the entries in
   * kindsOfDancers as defined in main.js, clicking that node will
   * call the function to make the dancer. */

  $(".clickable").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-creator");
    danceFloor.addDancer(dancerMakerFunctionName);
  });


  $(".call").on("click", function(event){
    for (var i=0; i<window.dancers.length; i++) {
      window.dancers[i].lineUp();
      isLinedUp = true;
    };
  });

}