

$(document).ready(function(){

  var kindsOfDancers = {
    makeRedBlinky: makeRedBlinky,
    makeBlueBlinky: makeBlueBlinky,
    movingDancer: movingDancer,
    changingDancer: changingDancer,
    DancerPrototype: DancerPrototype// found in blinkyDancer.js
  };

  /* This is a list of all the dancers that have been created.
   * danceFloor.js will create new dancers and add them to the list.*/
  window.dancers = [];

  var danceFloor = makeDanceFloor(kindsOfDancers, dancers);

  setupControls(danceFloor);
});