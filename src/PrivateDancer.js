var makePrivateDancer = function(left, top){
  /* Creates and returns a new dancer object at the given position,
   * where left is x-coordinate of left side and top is y-coordinate
   * of top side (measured down from top of window). */

  $moneyMaker = $('<img class="privateDancer" src="img/privatedancer.jpeg" />');
  privateDancer = new Dancer(1000, top, left, $moneyMaker);

  // Overwrite the dancer classes functions with some new dance moves
  privateDancer.turnItAround = function() {
    // Toggle CSS class to flip image horizontally
    this.$moneyMaker.toggleClass('privateDancerRight');
    this.$moneyMaker.toggleClass('privateDancer');
  };
  privateDancer.step = function(){
    this.turnItAround();
    this.getInPosition();
  };
  this.dance = function(){
    // go out...  (add our tag to the HTML page)
    this.$moneyMaker.appendTo('.stage');
    // ...and do those sexy moves
    // (this.step will be called on a timer)

    var wrapper = this;
    //wrap wrapper (referring to the dancer object) in a wrapper to pass to setInterval
    setInterval(function () {wrapper.step();}, wrapper.frequency);
  };

  // end dancer declaration

  privateDancer.getInPosition();

  return privateDancer;
};