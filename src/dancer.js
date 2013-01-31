var sharedDancerFunctions = {
	dance: function(){
    // go out...  (add our tag to the HTML page)
    this.$moneyMaker.appendTo('.stage');
    // ...and do those sexy moves
    // (this.step will be called on a timer)
 		var that = this;
    setInterval(function() {that.step();}, this.frequency);
  },

  step: function(){
    this.getInPosition();
    this.blink();
  },

  getInPosition: function(){
    /* Use css top and left properties to position our <span> tag
     * where it belongs on the page. See http://api.jquery.com/css/
     */
    var styleObj = {
      top: this.top,
      left: this.left
    };
    this.$moneyMaker.css(styleObj);
  }
}