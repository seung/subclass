// Dancer Constructor and Prototype

var Dancer = function(left, top) {
  this.top = top;
  this.left = left;
  this.frequency = Math.random() * 150;
  this.$moneyMaker = $('<span class="dancer"></span>');
  this.getInPosition();
};
Dancer.prototype.dance = function(){
  this.$moneyMaker.appendTo('.stage');
  var that = this;
  setInterval(function() {
    that.step();
  }, this.frequency);
};
Dancer.prototype.step = function(){
  this.getInPosition();
};
Dancer.prototype.getInPosition = function(){
  var styleObj = {
    top: this.top,
    left: this.left
  };
  this.$moneyMaker.css(styleObj);
};

// blinkyDancer Constructor and Prototype

var BlinkyDancer = function(left, top){
  this.top = top;
  this.left = left;
  this.frequency = Math.random() * 2000;
  this.$moneyMaker = $('<span class="blinky-dancer"></span>');
  this.getInPosition();
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.blink = function(){
  this.$moneyMaker.toggle();
};
BlinkyDancer.prototype.step = function(){
  this.getInPosition();
  this.blink();
};