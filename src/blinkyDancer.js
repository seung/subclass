//use object called blinkyDancer and whateverobect.create

var dancer = {
  
  dance: globalDance,
  step: globalStep,
  getInPosition: globalGetInPosition,
  blink: globalBlink,

}; // end dancer

var makeBlinkyDancer = function(left, top){
  /* Creates and returns a new dancer object at the given position,
   * where left is x-coordinate of left side and top is y-coordinate
   * of top side (measured down from top of window). */
  
  blinkyDancer = Object.create(dancer);
  // we'll use top and left to set the position of this dancer
  blinkyDancer.top = top;
  blinkyDancer.left = left;
  
  blinkyDancer.frequency = Math.random() * 2000;
  // get dressed... (use jQuery to create an HTML <span> tag)
  blinkyDancer.$moneyMaker = $('<span class="dancer"></span>');
  blinkyDancer.getInPosition();

  return blinkyDancer;
};
