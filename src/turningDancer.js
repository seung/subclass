var TurningDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.angle = Math.floor(timeBetweenSteps * 0.360);
};

TurningDancer.prototype = Object.create(Dancer.prototype);
TurningDancer.prototype = {

  step : function() {
    Dancer.prototype.step.call(this);
    this.setPosition(this.top, this.left);
  },

  setPosition: function(top, left) {
    var styleSettings = {
      'top': top,
      'left': left,
      'angle': ((this.angle + 15) % 360),
      'height': '62px',
      'width': '98px',
      'transform':'rotate(' + this.angle + 'deg)',
      'background': 'url("http://wemakeawesomesh.it/nyancat/nyan.gif") no-repeat',
      'background-size': '100%',
      'border': '0px',
      'border-radius': '0px'
    };
    this.$node.css(styleSettings);
  }
};
