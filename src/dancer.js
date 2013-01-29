var Dancer = function(left, top) {
  this.top = top;
  this.left = left;
  this.frequency = Math.random() * 200;
  this.$moneyMaker = $('<span class="dancer"></span>');
}; // end dancer

Dancer.prototype = {
  dance: function(){
    // go out...  (add our tag to the HTML page)
    this.$moneyMaker.appendTo('.stage');
    // ...and do those sexy moves
    // (dancer.step will be called on a timer)
    this.getInPosition();
    var that = this;
    setInterval(function(){
      that.step();
    }, this.frequency);
  },
  step: function(){
    this.getInPosition();
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
  },
  lineUp: function(){
    this.left = 100;
  },
  perish: function(){
    var list = window.dancers;
    for (var i = window.dancers.length-1; i >= 0; i--) {
      if (list[i] === this) {
        console.log("found");
        list.splice(i,1);
        this.$moneyMaker.remove();
      }
    }
  }
}


