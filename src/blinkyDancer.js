// Dancer Maker and Prototype

var makeDancer = function(left, top) {
  var dancer = Object.create(dancerPrototype);
  dancer.top = top;
  dancer.left = left;
  dancer.frequency = Math.random() * 150;
  dancer.$moneyMaker = $('<span class="dancer"></span>');

  dancer.getInPosition();
  return dancer;
};
var dancerPrototype = {};
dancerPrototype.dance = function(){
  this.$moneyMaker.appendTo('.stage');
  var that = this;
  setInterval(function() {
    that.step();
  }, this.frequency);
};
dancerPrototype.step = function(){
  this.getInPosition();
};
dancerPrototype.getInPosition = function(){
  var styleObj = {
    top: this.top,
    left: this.left
  };
  this.$moneyMaker.css(styleObj);
};

// blinkyDancer maker and Prototype

var makeBlinkyDancer = function(left, top){
  var blinky = Object.create(blinkyPrototype);
  blinky.top = top;
  blinky.left = left;
  blinky.frequency = Math.random() * 2000;
  blinky.$moneyMaker = $('<span class="blinky-dancer"></span>');

  blinky.getInPosition();
  return blinky;
};
var blinkyPrototype = Object.create(dancerPrototype);
blinkyPrototype.blink = function(){
  this.$moneyMaker.toggle();
};
blinkyPrototype.step = function(){
  this.getInPosition();
  this.blink();
};