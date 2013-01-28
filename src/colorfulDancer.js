var colorfulStep = function(){
  this.getInPosition();
  this.shimmer();
};

var ColorfulDancer = function(left, top){
  Dancer.call(this, left, top);
  this.frequency = Math.random() * 50;
  this.step = colorfulStep;
};

ColorfulDancer.prototype = Object.create(Dancer.prototype);
ColorfulDancer.prototype.color = "#800";
ColorfulDancer.prototype.blueness = 0;
ColorfulDancer.prototype.changeRate = 1;

ColorfulDancer.prototype.getInPosition = function(){
  var styleObj = {
    top: this.top,
    left: this.left,
    "border-color": this.color
  };
  this.$moneyMaker.css(styleObj);
  return true;
};

ColorfulDancer.prototype.shimmer = function() {
  this.blueness += this.changeRate;
  if (this.blueness >= 252) {
    this.changeRate = -1;
  }
  if (this.blueness < 3) {
    this.changeRate = 1;
  }
  this.color = "#8800" + this.blueness.toString(16);
}