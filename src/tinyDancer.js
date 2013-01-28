var makeTinyDancer = function(left, top){
  /* Creates and returns a new dancer object at the given position,
   * where left is x-coordinate of left side and top is y-coordinate
   * of top side (measured down from top of window). */


  $moneyMaker = $('<div class="loader"><span></span><span></span><span></span></div>');
  tinyDancer = new Dancer((Math.random() * 2000), top, left, $moneyMaker);
  // Overwrite the step function from the Dancer prototype to eliminate blinking
  tinyDancer.step = function() {
    this.getInPosition();
  }
  tinyDancer.getInPosition();

  return tinyDancer;
};
