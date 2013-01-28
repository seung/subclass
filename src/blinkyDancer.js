var Dancer = function(left, top, dancer_name) {
  this.left = left;
  this.top = top;
  this.frequency = Math.random() * 2000;
  this.$moneyMaker = $("<span class='" + dancer_name + "'></span>");

};

Dancer.prototype.getInPosition = function() {
  var styleObj = {
    top: this.top,
    left: this.left
  };
  this.$moneyMaker.css(styleObj);

};

Dancer.prototype.blink = function() {
  this.$moneyMaker.toggle();
};

Dancer.prototype.dance = function() {
  this.$moneyMaker.appendTo('.stage');
  var that = this;

  var callStepFunction = function() {
    that.step();
  };
  setInterval(callStepFunction, this.frequency);

};

Dancer.prototype.step = function() {
  this.getInPosition();
  this.blink();
};

var makeBlinkyDancer = function(left, top){
  var new_dancer = new Dancer(left, top, "dancer");
  new_dancer.getInPosition();
  return new_dancer;
};
