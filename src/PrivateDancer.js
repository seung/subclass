var makePrivateDancer = function(left, top){
  /* Creates and returns a new dancer object at the given position,
   * where left is x-coordinate of left side and top is y-coordinate
   * of top side (measured down from top of window). */

  $moneyMaker = $('<img class="privateDancer" src="img/privatedancer.jpeg" />');
  privateDancer = new Dancer((Math.random() * 1000), top, left, $moneyMaker);

  // Overwrite the dancer classes functions with some new dance moves
  privateDancer.turnItAround = function() {
    // Toggle CSS class to flip image horizontally
    privateDancer.$moneyMaker.toggleClass('privateDancerRight');
    privateDancer.$moneyMaker.toggleClass('privateDancer');
  };
  privateDancer.step = function(){
    privateDancer.turnItAround();
    privateDancer.getInPosition();
  };
  privateDancer.dance = function(){
    // go out...  (add our tag to the HTML page)
    privateDancer.$moneyMaker.appendTo('.stage');
    // ...and do those sexy moves
    // (privateDancer.step will be called on a timer)
    setInterval(privateDancer.step, privateDancer.frequency);
  };

  // end dancer declaration

  privateDancer.getInPosition();

  return privateDancer;
};