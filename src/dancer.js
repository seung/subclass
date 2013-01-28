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




