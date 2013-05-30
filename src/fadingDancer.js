// Functional inheritance pattern
var makeFadingDancer = function(top, left, timeBetweenSteps) {
  var fadingDancer = makeDancer(top, left, timeBetweenSteps);

  var oldStep =  blinkyDancer.step;

  blinkyDancer.step = function(){
    var self = this;
    oldStep();
    self.$node.slideDown(500, function() {
      self.$node.fadeToggle(500);    
    });
  };

  fadingDancer.step();
  return fadingDancer;
};

// Pseudo-classical pattern
var FadingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

FadingDancer.prototype = Object.create(Dancer.prototype);
FadingDancer.prototype = {
  constructor: FadingDancer,

  setStyle: function() {
      var styleSettings = {
          'border-radius': '0px',
      };
      this.$node.css(styleSettings);
  }
};
