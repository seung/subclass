//use object called blinkyDancer and whateverobect.create

var makeBlinkyDancer = function(left, top){
  /* Creates and returns a new dancer object at the given position,
   * where left is x-coordinate of left side and top is y-coordinate
   * of top side (measured down from top of window). */
  
  // get dressed... (use jQuery to create an HTML <span> tag)
  $moneyMaker = $('<span class="dancer"></span>');
  // we'll use top and left to set the position of this dancer
  // and (Math.random() * 2000) to set the frequency
  blinkyDancer = new Dancer((Math.random() * 2000), top, left, $moneyMaker);

  blinkyDancer.getInPosition();

  return blinkyDancer;
};
