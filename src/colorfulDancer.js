var colorfulStep = function(){
  this.getInPosition();
  this.shimmer();
};

var shimmer = function(){
  this.blueness += 1;
  if (this.blueness >= 255) {
    this.blueness = 0;
  }
  this.color = "#8800" + this.blueness.toString(16);
};

var colorfulPosition = function(){
  var styleObj = {
    top: this.top,
    left: this.left,
    "border-color": this.color
  };
  this.$moneyMaker.css(styleObj);
  return true;
};

var ColorfulDancer = function(left, top){
  Dancer.call(this, left, top);
  this.color = "blue";
  this.blueness = 0;
  this.frequency = Math.random() * 200;
  this.step = colorfulStep;
  this.shimmer = shimmer;
  this.getInPosition = colorfulPosition;
};
ColorfulDancer.prototype = Object.create(Dancer.prototype);
