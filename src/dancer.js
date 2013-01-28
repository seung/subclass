var dance = function(){
  // go out...  (add our tag to the HTML page)
  this.$moneyMaker.appendTo('.stage');
  // ...and do those sexy moves
  // (dancer.step will be called on a timer)
  this.getInPosition();
  var that = this;
  setInterval(function(){
    that.step();
  }, this.frequency);
}

var step = function(){
  this.getInPosition();
  this.blink();
}

var getInPosition = function(){
  /* Use css top and left properties to position our <span> tag
   * where it belongs on the page. See http://api.jquery.com/css/
   */
var styleObj = {
  top: this.top,
  left: this.left
  };
  this.$moneyMaker.css(styleObj);
};

var blink = function(){
  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  this.$moneyMaker.toggle();
};

var lineUp = function(){
  this.left = 100;
}

var Dancer = function(left, top) {
  this.dance = dance;
  this.step = step;
  this.getInPosition = getInPosition;
  this.lineUp = lineUp;
  this.top = top;
  this.left = left;
  this.frequency = Math.random() * 2000;
  this.$moneyMaker = $('<span class="dancer"></span>');

}; // end dancer

var makeDancer = function(left, top){
  /* Creates and returns a new dancer object at the given position,
   * where left is x-coordinate of left side and top is y-coordinate
   * of top side (measured down from top of window). */
  var dancer = new Dancer(left, top);

  return dancer;
};



