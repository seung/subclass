var BlinkyDancer = function(left, top){
  /* Creates and returns a new blinkyDancer object at the given position,
   * where left is x-coordinate of left side and top is y-coordinate
   * of top side (measured down from top of window). */
  this.left = left;
  this.top = top;
  this.frequency = Math.random() * 2000;
  this.$moneyMaker = $('<span class="dancer"></span>');
  this.getInPosition();
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.blink = function(){
  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  this.$moneyMaker.toggle();
};

BlinkyDancer.prototype.step = function(){
  this.getInPosition();
  this.blink();
};

