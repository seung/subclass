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
  this.frequency = Math.random() * 50;
  this.step = colorfulStep;
  this.shimmer = shimmer;
};
ColorfulDancer.prototype = Object.create(Dancer.prototype);
ColorfulDancer.prototype.color = "#800";
ColorfulDancer.prototype.blueness = 0;
ColorfulDancer.prototype.getInPosition = colorfulPosition;