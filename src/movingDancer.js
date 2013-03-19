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
    this.setPosition(top, left);
};

