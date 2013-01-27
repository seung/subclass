var makeTinyDancer = function(left, top){
  /* Creates and returns a new dancer object at the given position,
   * where left is x-coordinate of left side and top is y-coordinate
   * of top side (measured down from top of window). */

  var dancer = makeBlinkyDancer(left, top);
  dancer.$moneyMaker = $('<div class="loader"><span></span><span></span><span></span></div>');

  dancer.getInPosition();

  return dancer;
};
