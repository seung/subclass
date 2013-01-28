var GiantDancer = function(left, top) {
  this.left = left;
  this.top = top;
  this.$moneyMaker = $("<span class='giant_dancer'></span>");
  Dancer.apply(this);
  this.frequency = Math.random() * 100;
  this.direction = "right";
};

GiantDancer.prototype = new Dancer();
GiantDancer.prototype.step = function() {
  this.getInPosition();
  // debugger;
  this.roll();

};
GiantDancer.prototype.roll = function() {
  var width = $("body").width();
  if (this.direction == "right") {
    this.left += 10;
  }
  if (this.direction === "left") {
    this.left -= 10;
  }
  if (this.left >= width) {
    this.direction = "left";
  }
  if (this.left <= 0) {
    this.direction = "right";
  }

}
var makeGiantDancer = function(left, top){

  var giantDancer = new GiantDancer(left, top);
  giantDancer.getInPosition();
  return giantDancer;
};