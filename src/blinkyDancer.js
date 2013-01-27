var blink = function(){
  this.$moneyMaker.toggle();
};

var dance = function(){
  this.$moneyMaker.appendTo('.stage');
  var that = this;
  setInterval(function(){ that.step(); }, that.frequency);
};

var step = function(){
  this.getInPosition();
  this.blink();
};

var getInPosition = function(){
  var styleObj = {
    top: this.top,
    left: this.left
  };
  this.$moneyMaker.css(styleObj);
};

var lineUp = function(){
  this.left = 0;
};

var globalDancer = {
    // we'll use top and left to set the position of this dancer
    // used in setInterval below
    frequency: Math.random() * 2000,
    // get dressed... (use jQuery to create an HTML <span> tag)
    $moneyMaker: $('<span class="dancer"></span>'),
    step: step,
    getInPosition: getInPosition,
    blink: blink,
    dance: dance,
    lineUp: lineUp
  };

var makeBlinkyDancer = function(left, top){
  /* Creates and returns a new dancer object at the given position,
   * where left is x-coordinate of left side and top is y-coordinate
   * of top side (measured down from top of window). */
  var dancer = Object.create(globalDancer);
  dancer.top = top;
  dancer.left = left;
  dancer.getInPosition();
  return dancer;
};

