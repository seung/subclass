var throb = function(){
  this.radius += 1;
  if  (this.radius > 30) { this.radius = 5; }
  this.radiusString = this.radius.toString() + "px";
}

var throbStep = function() {
  this.getInPosition();
  this.throb();
}

var throbPosition = function(){
  var adjTop = this.top - this.radius;
  var adjLeft = this.left - this.radius;
  var styleObj = {
    top: adjTop,
    left: adjLeft,
    "border-width": this.radiusString,
    "border-radius": this.radiusString
  };
  this.$moneyMaker.css(styleObj);
  
  return true;
}

var ThrobbingDancer = function(left, top) {

  this.top = top;
  this.left = left;
  this.throbRate = 0.5;
  this.radius = 10;
  this.radiusString;

  this.throb = throb;
  this.step = throbStep;
  this.getInPosition = throbPosition;
};
ThrobbingDancer.prototype = new Dancer(0,0);