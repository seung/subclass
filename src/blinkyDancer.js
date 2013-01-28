var blinkyStep = function(){
  this.getInPosition();
  this.blink();
}

var blink = function(){
  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  this.$moneyMaker.toggle();
};

var makeBlinkyDancer = function(left, top){
  /* Creates and returns a new dancer object at the given position,
   * where left is x-coordinate of left side and top is y-coordinate
   * of top side (measured down from top of window). */
  var dancer = new Dancer(left, top); 

  dancer.step = blinkyStep;
  dancer.blink = blink;

  return dancer;
};
