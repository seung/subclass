var dance = function (){
    this.$moneyMaker.appendTo('.stage');
    setInterval(this.step, this.frequency);
};

var step = function(){
    this.getInPosition();
    this.blink();
};

var getInPosition = function(){
    var styleObj = {
      top: this.top,
      left: this.left
    };
    this.$moneyMaker.css(styleObj);
};

var blink = function(){
    this.$moneyMaker.toggle();
};

var dancer = {};
dancer.dance = dance;
dancer.step = step;
dancer.getInPosition = getInPosition;
dancer.blink = blink;

var makeBlinkyDancer = function(left, top){
  /* Creates and returns a new dancer object at the given position,
   * where left is x-coordinate of left side and top is y-coordinate
   * of top side (measured down from top of window). */
   newDancer = Object.create(dancer)

  newDancer.top = top;
  newDancer.left = left;
  newDancer.frequency = Math.random() * 2000;
  newDancer.$moneyMaker = $('<span class="blinkydancer"></span>')

  newDancer.getInPosition();

  return newDancer;
};
