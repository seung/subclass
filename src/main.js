$(document).ready(function(){
	
  var kindsOfSprites = {
    spriteCircle: spriteCircle,
  };
  
  var spriteArray = [];  // was window.dancers, try if buggy

  var canvas = makeCanvas(kindsOfSprites, spriteArray);
  setupControls(canvas);

});

  // This is a list of all the dancers that have been created.
  // * danceFloor.js will add to it when you click on stuff.
  // * When you're writing mixins that affect existing dancers, you'll use it.
