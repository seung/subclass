var GlobalDancerConstructor = function(top, left, move) {
  this.top = top;
  this.left = left;
  this.frequency = Math.random() * 2000;
  this.$moneyMaker = $('<span class=""></span>');
  this.move = move;
};

GlobalDancerConstructor.prototype.blink = function(){
  this.$moneyMaker.toggle();
};

GlobalDancerConstructor.prototype.dance = function(){
  this.$moneyMaker.appendTo('.stage');
  var that = this;
  setInterval(function(){ that.step(); }, that.frequency);
};

GlobalDancerConstructor.prototype.lineUp = function(){
  this.left = 0;
};

GlobalDancerConstructor.prototype.getInPosition = function(){
  var styleObj = {
      top: this.top,
      left: this.left
    };
  this.$moneyMaker.css(styleObj);
};

GlobalDancerConstructor.prototype.step = function(){
  this.getInPosition();
  this.blink();
  this.move();
};

var makeBlinkyDancer = function(top, left){
  /* Creates and returns a new dancer object at the given position,
   * where left is x-coordinate of left side and top is y-coordinate
   * of top side (measured down from top of window). */
  var dancer = new GlobalDancerConstructor(top, left);
  dancer.$moneyMaker.addClass('dancer animated flip');
  return dancer;
};

