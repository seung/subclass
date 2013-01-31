var makeBlinkyDancer = function(left, top){
  /* Creates and returns a new blinkyDancer object at the given position,
   * where left is x-coordinate of left side and top is y-coordinate
   * of top side (measured down from top of window). */
  
  blinkyDancer = Object.create(blinkyDancerPrototype);
  blinkyDancer.left = left;
  blinkyDancer.top = top;
  blinkyDancer.frequency = Math.random() * 2000;
  blinkyDancer.$moneyMaker = $('<span class="dancer"></span>');
  blinkyDancer.getInPosition();
  return blinkyDancer;
};

var blinkyDancerPrototype = Object.create(dancerPrototype);
// get dressed... (use jQuery to create an HTML <span> tag)
blinkyDancerPrototype.blink = function(){
  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  this.$moneyMaker.toggle();
};
blinkyDancerPrototype.step = function(){
  this.getInPosition();
  this.blink();
};

