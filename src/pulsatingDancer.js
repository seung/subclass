var pulsatingPrototype = {
  dance: function(){
    // go out...  (add our tag to the HTML page)
    this.$moneyMaker.appendTo('.stage');
    // ...and do those sexy moves
    // (dancer.step will be called on a timer)
    setInterval(this.step, this.frequency);
  },

  blink: function(){
    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    this.$moneyMaker.toggle();
  }
}

var makePulsatingDancer = function(left, top){
  /* Creates and returns a new dancer object at the given position,
   * where left is x-coordinate of left side and top is y-coordinate
   * of top side (measured down from top of window). */

  var dancer = Object.create(pulsatingPrototype);

  dancer.top = top;
  dancer.left = left;

  // get dressed... (use jQuery to create an HTML <span> tag)
  dancer.$moneyMaker = $('<span class="dancer"></span>');


  dancer.step = function(){
    dancer.getInPosition();
    dancer.blink();
  };

  dancer.getInPosition = function(){
    /* Use css top and left properties to position our <span> tag
     * where it belongs on the page. See http://api.jquery.com/css/
     */
    var styleObj = {
      top: dancer.top,
      left: dancer.left
    };
    dancer.$moneyMaker.css(styleObj);
  };

  dancer.getInPosition();

  return dancer;
};
