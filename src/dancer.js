var Dancer = function(left, top) {
  // dancer = Object.create(dancerPrototype);
  this.left = left;
  this.top = top;
  this.frequency = Math.random() * 2000;
  this.$moneyMaker = $('<span class="this"></span>');
  blinkyDancer.getInPosition();
}

Dancer.prototype.dance = function(){
  // go out...  (add our tag to the HTML page)
  this.$moneyMaker.appendTo('.stage');
  // ...and do those sexy moves
  // (this.step will be called on a timer)
    var that = this;
  setInterval(function() {that.step();}, this.frequency);
};

Dancer.prototype.step = function(){
  this.getInPosition();
};

Dancer.prototype.getInPosition = function(){
  /* Use css top and left properties to position our <span> tag
   * where it belongs on the page. See http://api.jquery.com/css/
   */
  var styleObj = {
    top: this.top,
    left: this.left
  };
  this.$moneyMaker.css(styleObj);
};