$(document).ready(function(){

  // This is a list of the different kinds of dancers. Right now, 
  // there's just one, but eventually, you'll want to add more.
  var kindsOfDancers = {
    blinkyDancer: BlinkyDancer, // found in dancerTypes.js
    raveDancer: RaveDancer, // found in dancerTypes.js
    moshPitDancer: MoshPitDancer // found in moshPitDancer.js
  };
  
  // This is a list of all the dancers that have been created.
  // * danceFloor.js will add to it when you click on stuff.
  // * When you're writing mixins that affect existing dancers, you'll use it.
  window.dancers = [];

  var danceFloor = makeDanceFloor(kindsOfDancers, dancers);
  setupControls(danceFloor);
});