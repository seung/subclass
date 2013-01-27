var globalDance = function(){
  // go out...  (add our tag to the HTML page)
  
  this.$moneyMaker.appendTo('.stage');
  // ...and do those sexy moves
  // (dancer.step will be called on a timer)
  var x = this;
  //wrap x (referring to the dancer object) in a wrapper to pass to setInterval
  setInterval(function () {x.step();}, x.frequency);
};

var globalStep = function(){
  this.getInPosition();
  this.blink();
};

var globalGetInPosition = function() {
  /* Use css top and left properties to position our <span> tag
   * where it belongs on the page. See http://api.jquery.com/css/
   */
  var styleObj = {
    top: this.top,
    left: this.left
  };
  this.$moneyMaker.css(styleObj);
}

var globalBlink = function(){
  this.$moneyMaker.toggle();
};