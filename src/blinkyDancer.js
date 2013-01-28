var Dancer = function() {
  this.blink = function(){
    this.$moneyMaker.toggle();
  };

  this.dance = function(){
    this.$moneyMaker.appendTo('.stage');
    var that = this;
    setInterval(function(){ that.step(); }, that.frequency);
  };

  this.step = function(){
    this.getInPosition();
    this.blink();
  };

  this.getInPosition = function(){
    var styleObj = {
      top: this.top,
      left: this.left
    };
    this.$moneyMaker.css(styleObj);
  };

  this.lineUp = function(){
    this.left = 0;
  };

};

var makeBlinkyDancer = function(left, top){
  /* Creates and returns a new dancer object at the given position,
   * where left is x-coordinate of left side and top is y-coordinate
   * of top side (measured down from top of window). */
  var dancer = new Dancer();
  dancer.top = top;
  dancer.left = left;
  dancer.frequency = Math.random() * 2000;
  dancer.$moneyMaker = $('<span class="dancer"></span>');
  dancer.getInPosition();
  return dancer;
};

