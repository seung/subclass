var ninjaStep = function(){
  this.getInPosition();
}

var NinjaDancer = function(left, top){
  Dancer.call(this, left, top);
  this.step = ninjaStep;
  this.getInPosition = this.ninjaChop;
};

NinjaDancer.prototype = Object.create(Dancer.prototype);
NinjaDancer.prototype.ninjaChop = function() {
  var styleObj = {
    "border-width": "50px",
    "border-radius": "10px",
    "border-color": "black",
    position: "absolute",
    top: this.top,
    left: this.left
  };
  this.$moneyMaker.css(styleObj);
}