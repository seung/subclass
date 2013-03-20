var TurningDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // use timeBetweenSteps to get random angle
  this.angle = Math.floor(timeBetweenSteps * 0.360);
};

TurningDancer.prototype = Object.create(Dancer.prototype);
TurningDancer.prototype.constructor = Dancer;

TurningDancer.prototype.step = function() {
    Dancer.prototype.step.call(this);
    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    this.setPosition(this.top, this.left);
};

TurningDancer.prototype.setPosition = function(top, left) {
    this.angle = ((this.angle + 10) % 360);
    var styleSettings = {
    'height': '62px',
    'width': '98px',
    'background': 'url("http://wemakeawesomesh.it/nyancat/nyan.gif") no-repeat',
    'background-size': '100%',
    'border': '0px',
    'border-radius': '0px',
    'transform':'rotate(' + this.angle + 'deg)',
    top: top,
    left: left};
  this.$node.css(styleSettings);
};
