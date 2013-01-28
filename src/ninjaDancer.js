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

var makeNinjaDancer = function(left, top){
  /* Creates and returns a new dancer object at the given position,
   * where left is x-coordinate of left side and top is y-coordinate
   * of top side (measured down from top of window). */

  var dancer = Object.create(Dancer);
  dancer.init(left, top);

  dancer.step = ninjaStep;
  dancer.getInPosition = ninjaChop;

  return dancer;
};
