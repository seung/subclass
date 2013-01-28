var PseudoDancer = function(left, top){
  /* Creates and returns a new dancer object at the given position,
   * where left is x-coordinate of left side and top is y-coordinate
   * of top side (measured down from top of window). BlinkyDancer
   * returns a dancer that blinks at a random frequency.
   */

  //var dancer = Object.create(prototypalDancer);
    this.top = top;
    this.left = left;
    this.frequency = Math.random() * 2000;
    this.$moneyMaker = $('<span class="dancer"></span>');

  this.dance = function(){
    
    // go out...  (add our tag to the HTML page)
    this.$moneyMaker.appendTo('.stage');
    // ...and do those sexy moves
    // (dancer.step will be called on a timer)
    
    var dancer = this;
    setInterval(function(){
      dancer.step();
    }, this.frequency);
  };

  this.step = function(){
    // this === dance
    this.getInPosition();
    this.blink();
  };
  
  this.getInPosition = function(){
    /* Use css top and left properties to position our <span> tag
     * where it belongs on the page. See http://api.jquery.com/css/
     */

    var styleObj = {
      top: this.top,
      left: this.left
    };
    
    this.$moneyMaker.css(styleObj);
  };

  this.blink = function(){
    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    this.$moneyMaker.toggle();
  };

  // Not certain that this is correct
  this.getInPosition();

};


