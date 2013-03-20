var MovingDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = Dancer;

MovingDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    var vSpeed = (Math.random()-0.5) * 20;
    var hSpeed = (Math.random()-0.5) * 20;
    this.setPosition(this.top + vSpeed, this.left + hSpeed);
};

MovingDancer.prototype.setPosition = function(top, left) {
  this.top = top;
  this.left = left;
  var styleSettings = {
    'border': '15px solid blue',
    'border-radius': '2px',
    top: top,
    left: left};
  this.$node.css(styleSettings);
};
