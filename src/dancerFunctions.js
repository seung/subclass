var Dancer = function(frequency, top, left, $moneyMaker) {
  this.frequency = frequency;
  this.top = top;
  this.left = left;
  this.$moneyMaker = $moneyMaker;
}; // end dancer

Dancer.prototype.dance = function(){
  // go out...  (add our tag to the HTML page)
  this.$moneyMaker.appendTo('.stage');
  // ...and do those sexy moves
  // (dancer.step will be called on a timer)
  var wrapper = this;
  //wrap wrapper (referring to the dancer object) in a wrapper to pass to setInterval
  setInterval(function () {wrapper.step();}, wrapper.frequency);
};

Dancer.prototype.step = function(){
  this.getInPosition();
  this.blink();
};

Dancer.prototype.getInPosition = function() {
  /* Use css top and left properties to position our <span> tag
   * where it belongs on the page. See http://api.jquery.com/css/
   */
  var styleObj = {
    top: this.top,
    left: this.left
  };
  this.$moneyMaker.css(styleObj);
};

Dancer.prototype.blink = function(){
  this.$moneyMaker.toggle();
};