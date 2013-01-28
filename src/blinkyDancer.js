var Dancer = function() {
  this.frequency = Math.random() * 4000;
};

Dancer.prototype.getInPosition = function() {
  var styleObj = {
    top: this.top,
    left: this.left
  };
  this.$moneyMaker.css(styleObj);

};

Dancer.prototype.dance = function() {
  this.$moneyMaker.appendTo('.stage');
  var that = this;

  var callStepFunction = function() {
    that.step();
  };
  setInterval(callStepFunction, this.frequency);

};

Dancer.prototype.step = function() {
  this.getInPosition();
  this.blink();
};

//Constructor for Blinky Dancer
var BlinkyDancer = function(left, top) {
  this.left = left;
  this.top = top;
  this.$moneyMaker = $("<span class='dancer'></span>");
  Dancer.apply(this);
}

BlinkyDancer.prototype = new Dancer();

BlinkyDancer.prototype.blink = function() {
  this.$moneyMaker.toggle();
};


var makeBlinkyDancer = function(left, top){
  var new_blinkyDancer = new BlinkyDancer(left, top);
  new_blinkyDancer.getInPosition();
  return new_blinkyDancer;
};
