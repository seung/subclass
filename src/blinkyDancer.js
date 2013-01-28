var dancerPrototype = {};


dancerPrototype.dance = function() {
  this.$moneyMaker.appendTo('.stage');
  var that = this;

  var callStepFunction = function() {
    that.step();
  };
  setInterval(callStepFunction, this.frequency);
  
};

dancerPrototype.step = function() {
  this.getInPosition();
  this.blink();
};

dancerPrototype.getInPosition = function() {
  var styleObj = {
    top: this.top,
    left: this.left
  };
  this.$moneyMaker.css(styleObj);
};

dancerPrototype.blink = function() {
  this.$moneyMaker.toggle();
};

var makeBlinkyDancer = function(left, top){
  var dancer = Object.create(dancerPrototype);
  dancer.left = left;
  dancer.top = top;
  dancer.frequency = Math.random() * 2000;
  dancer.$moneyMaker = $('<span class="dancer"></span>');
  dancer.getInPosition();
  return dancer;
};
