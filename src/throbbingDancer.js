var throbStep = function() {
  this.getInPosition();
  this.throb();
}

var ThrobbingDancer = function(left, top) {
  Dancer.call(this, left, top);
  this.step = throbStep;
  this.growthRate = 1;
  this.maxSize = Math.abs( 5 + (Math.random() * 30) );
};
ThrobbingDancer.prototype = Object.create(Dancer.prototype);
ThrobbingDancer.prototype.throbRate = 1;
ThrobbingDancer.prototype.radius = 10;
ThrobbingDancer.prototype.getInPosition = function(){
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
};
ThrobbingDancer.prototype.throb = function(){
  this.radius += this.growthRate;
  if  (this.radius > this.maxSize) { 
    this.growthRate = -1; 
  }
  if (this.radius < 5) {
    this.growthRate = 1;
  }
  this.radiusString = this.radius.toString() + "px";
};