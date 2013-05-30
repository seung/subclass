// Pseudoclassical pattern
var MovingDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype = {
  step: function(stopped) {
    Dancer.prototype.step.call(this);
    var vSpeed = (Math.random()-0.5) * 20;
    var hSpeed = (Math.random()-0.5) * 20;
    if(!stopped) {
      this.setPosition(this.top + vSpeed, this.left + hSpeed);
    }
  },

  setPosition: function(top, left) {
    var styleSettings = {
      'height': '56px',
      'width': '100px',
      'background': 'url("http://awesomelyluvvie.com/wp-content/uploads/2012/10/DontGiveAFuckStarWars.gif") no-repeat',
      'background-size': '100%',
      'border': '0px',
      'border-radius': '0px',
      'opacity': '1.0',
      'top': top,
      'left': left
    };
    this.$node.css(styleSettings);
  }
};
