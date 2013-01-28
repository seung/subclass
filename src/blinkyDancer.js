var BlinkyDancer = function(left, top){
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
    this.getInPosition();
};

  BlinkyDancer.prototype = Object.create(Dancer.prototype);


  Dancer.prototype.step = function(){
    this.getInPosition();
    this.blink();
  };

  Dancer.prototype.blink = function(){
    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    this.$moneyMaker.toggle();
  };


