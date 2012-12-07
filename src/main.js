$(document).ready(function(){

  // This is a list of the different kinds of dancers. Right now, 
  // there's just one, but eventually, you'll want to add more.
  var kindsOfDancers = {
    makeBlinkyDancer: makeBlinkyDancer,
    makeColorDancer: makeColorDancer,
    makeFadedInDancer: makeFadedInDancer,
  };
  
  // This is a list of all the dancers that have been created.
  // * danceFloor.js will add to it when you click on stuff.
  // * When you're writing mixins that affect existing dancers, you'll use it.
  window.dancers = [];

  var danceFloor = makeDanceFloor(kindsOfDancers, dancers);
  setupControls(danceFloor);
});