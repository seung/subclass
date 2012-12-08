$(document).ready(function(){

  // This is a list of the different kinds of dancers. Right now, 
  // there's just one, but eventually, you'll want to add more.
  var kindsOfDancers = {
    makeBlinkyDancer: BlinkyDancer, // found in blinkyDancer.js
    makeFadeyDancer: FadeyDancer,
    makeColorDancer: ColorDancer,
    makeShapeDancer: ShapeDancer,
    makeStarDancer: StarDancer
  };
  
  // This is a list of all the dancers that have been created.
  // * danceFloor.js will add to it when you click on stuff.
  // * When you're writing mixins that affect existing dancers, you'll use it.
  dancers = [];
  BlinkyDancer.prototype = new Dancer;
  FadeyDancer.prototype = new Dancer;
  ColorDancer.prototype = new Dancer;
  ShapeDancer.prototype = new Dancer;
  StarDancer.prototype = new Dancer;

  var danceFloor = makeDanceFloor(kindsOfDancers, dancers);
  setupControls(danceFloor);
});