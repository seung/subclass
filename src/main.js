$(document).ready(function(){
  var kindsOfSprites = {
    spriteCircle: spriteCircle,
  };
  // This is a list of all the dancers that have been created.
  // * danceFloor.js will add to it when you click on stuff.
  // * When you're writing mixins that affect existing dancers, you'll use it.
  var dancers = [];  // was window.dancers, try if buggy

  var danceFloor = makeCanvas(kindsOfSprites, dancers);
  setupControls(danceFloor);
});

