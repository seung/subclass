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

var makeColorfulDancer = function(left, top){
  var dancer = new Dancer(left, top);
  dancer.color = "blue";
  dancer.blueness = 0;
  dancer.frequency = Math.random() * 200;
  dancer.step = colorfulStep;
  dancer.shimmer = shimmer;
  dancer.getInPosition = colorfulPosition;
  return dancer;
};