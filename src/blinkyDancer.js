var dance = function(){
  // go out...  (add our tag to the HTML page)
  this.$moneyMaker.appendTo('.stage');
  // ...and do those sexy moves
  // (dancer.step will be called on a timer)
  var that = this;
  setInterval(function(){
    that.step();
  }, this.frequency);
}

var step = function(){
      this.getInPosition();
      this.blink();
    }
var blinkyPosition = function(){
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

var makeBlinkyDancer = function(left, top){
  /* Creates and returns a new dancer object at the given position,
   * where left is x-coordinate of left side and top is y-coordinate
   * of top side (measured down from top of window). */

  var dancer = {
    // we'll use top and left to set the position of this dancer
    top: top,
    left: left,

    // used in setInterval below
    frequency: Math.random() * 2000,

    // get dressed... (use jQuery to create an HTML <span> tag)
    $moneyMaker: $('<span class="dancer"></span>'),

    dance: dance,

    step: step,

    getInPosition: blinkyPosition,

    blink: blink

  }; // end dancer

  dancer.getInPosition();

  return dancer;
};
