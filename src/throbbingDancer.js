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

var makeThrobbingDancer = function(left, top) {
  var dancer = Object.create(Dancer);
  dancer.init(left, top);
  dancer.throbRate = 0.5;
  dancer.radius = 10;
  dancer.radiusString;

  dancer.throb = throb;
  dancer.step = throbStep;

  dancer.getInPosition = throbPosition;
  
  dancer.getInPosition();

  return dancer;
};