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
  Dancer.call(this, left, top);
  this.step = ninjaStep;
  this.getInPosition = ninjaChop;
};
NinjaDancer.prototype = Object.create(Dancer.prototype);