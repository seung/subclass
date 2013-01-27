var makePrivateDancer = function(left, top){
  /* Creates and returns a new dancer object at the given position,
   * where left is x-coordinate of left side and top is y-coordinate
   * of top side (measured down from top of window). */

  var dancer = makeBlinkyDancer(left, top);
  dancer.$moneyMaker = $('<img class="privateDancer" src="img/privatedancer.jpeg" />');
  dancer.frequency = 1000;
  dancer.turnItAround = function() {
    // Toggle CSS class to flip image horizontally
    dancer.$moneyMaker.toggleClass('privateDancerRight');
    dancer.$moneyMaker.toggleClass('privateDancer');
  };
  dancer.step = function(){
    dancer.turnItAround();
    dancer.getInPosition();
  };
  dancer.dance = function(){
    // debugger;
    // go out...  (add our tag to the HTML page)
    dancer.$moneyMaker.appendTo('.stage');
    // ...and do those sexy moves
    // (dancer.step will be called on a timer)
    setInterval(dancer.step, dancer.frequency);
  };

  // end dancer declaration

  dancer.getInPosition();

  return dancer;
};