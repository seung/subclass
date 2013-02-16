$(document).ready(function(){

  var kindsOfDancers = {
    makeRedBlinky: makeRedBlinky,
    makeDonutBlinky: makeDonutBlinky,
    movingDancer: movingDancer,
    changingDancer: makeChangingDancer,
    DancerPrototype: DancerPrototype// found in blinkyDancer.js
  };

  window.dancers = [];

  var danceFloor = makeDanceFloor(kindsOfDancers, dancers);

  setupControls(danceFloor);

});