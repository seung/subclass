var Dancer = function(left, top){
  this.left = left;
  this.top = top;
  this.frequency = Math.random()*2000;
}

Dancer.prototype.dance = function (){
  this.$moneyMaker.appendTo('.stage');
  var dancer = this;
  setInterval(function(){dancer.step()}, dancer.frequency)
};

Dancer.prototype.step = function(){
  this.getInPosition();
  this.blink();
};

Dancer.prototype.getInPosition = function(){
  var styleObj = {
    top: this.top,
    left: this.left
  };
  this.$moneyMaker.css(styleObj);
};

Dancer.prototype.blink = function (){
  this.$moneyMaker.toggle();
};


var BlinkyDancer = function(left, top){
  var blinkyDancer = new Dancer(left, top);
  blinkyDancer.$moneyMaker = $('<span class="dancer"></span>');
  blinkyDancer.getInPosition();
  return blinkyDancer;
};

var BlueDancer = function(left, top){
  var blueDancer = new Dancer(left, top);
  blueDancer.$moneyMaker = $('<span class="bluedancer"></span>');
  blueDancer.getInPosition();
  return blueDancer;
};