// Functional inheritance pattern
var makeDancer = function(top, left, timeBetweenSteps){
  var dancer = {};

  dancer.$node = $('<span class="dancer"></span>');

  dancer.step = function() {
    setTimeout(dancer.step, timeBetweenSteps);
  };
  dancer.step();

  dancer.setPosition = function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };
    dancer.$node.css(styleSettings);
  };

  dancer.setPosition(top, left);
  return dancer;
};

// Pseudoclassical pattern
var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

// Superclass method
Dancer.prototype = {

  step: function() {
      var that = this;
      setTimeout(function() {
        that.step();
      }, that.timeBetweenSteps)
  },
  setPosition: function(top, left) {
      var styleSettings = {
        'top': top,
        'left': left
      };
      this.$node.css(styleSettings);
  }
};
