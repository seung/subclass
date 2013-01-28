var ninjaStep = function(){
  this.getInPosition();
}

var ninjaChop = function(){
  var styleObj = {
    border: "5px 10px solid red;",
    "border-radius": "10px",
    position: "absolute",
    top: this.top,
    left: this.left
  };
  this.$moneyMaker.css(styleObj);
};

var NinjaDancer = function(left, top){
  this.left = left;
  this.top = top;
  dancer.step = ninjaStep;
  dancer.getInPosition = ninjaChop;
};
NinjaDancer.prototype = new Dancer(0,0);