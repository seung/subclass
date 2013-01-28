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

var BlinkyDancer = function(left, top){
  Dancer.call(this, left, top);
  this.step = blinkyStep;
  this.blink = blink;
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);