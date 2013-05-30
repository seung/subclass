// Functional inheritance pattern
var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function(){
    oldStep();
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};

// Pseudoclassical pattern
var BlinkyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

// Subclass extends superclass
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype = {
  constructor: BlinkyDancer,

  step: function() {
    Dancer.prototype.step.call(this);
    this.$node.toggle();
  }
};
