var lineUp = function(direction) {
  for (var i = 0; i < window.dancers.length; i++) {
    if (window.dancers[i].canLineUp) {
      window.dancers[i].left = 0;
    };
  };
};

var dance = function (){
  this.$moneyMaker.appendTo('.stage');
  // console.log(this);
  var dancer = this;
  setInterval(function(){
    dancer.step();
  }, dancer.frequency );
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

var walk = function(top, left){
  var floorWidth = $("body").width();
  var floorHeight = $("body").height();

  if (this.left < 0) this.dX *= -1;
  if (this.left + 65 > floorWidth) this.dX *= -1;
  if (this.top + 45 > floorHeight) this.dY *= -1;
  if (this.top < 0) this.dY *= -1;

  this.left += this.dX;
  this.top += this.dY;

  return true;
};

var metaDancer = {};
metaDancer.dance = dance;
metaDancer.step = step;
metaDancer.getInPosition = getInPosition;
metaDancer.blink = blink;
metaDancer.walk = walk;
metaDancer.canLineUp = false;
metaDancer.frequency = Math.random() * 2000;
metaDancer.$moneyMaker = $('<span class="dancer"></span>');

var makeBlinkyDancer = function(left, top){
  /* Creates and returns a new dancer object at the given position,
   * where left is x-coordinate of left side and top is y-coordinate
   * of top side (measured down from top of window). */

  var dancer = Object.create(metaDancer);
  dancer.top = top;
  dancer.left = left;
  dancer.getInPosition();

  return dancer;
};

var makeMuffinDancer = function(left, top) {

  var muffinDancer = makeBlinkyDancer(left, top);
  muffinDancer.frequency = 500;

  // muffinDancer.$moneyMaker = $('<img src="img/MrCupcake.png" class="muffin-dancer">');
  muffinDancer.$moneyMaker = $('<span class="muffin-dancer"></span>');
  muffinDancer.getInPosition();
  return muffinDancer;
}


var makeRabiesDancer = function(left, top) {

  var rabiesDancer = makeBlinkyDancer(left, top);
  rabiesDancer.canLineUp = true;
  rabiesDancer.frequency = 35;
  // rabiesDancer.$moneyMaker = $('<img src="img/Toter.png" class="rabies-dancer">');
  rabiesDancer.$moneyMaker = $('<span class="rabies-dancer"></span>');
  
  rabiesDancer.dX = 10;
  rabiesDancer.dY = 10;

  rabiesDancer.step = function() {
    rabiesDancer.getInPosition();
    rabiesDancer.walk();
  };

  rabiesDancer.getInPosition();

  return rabiesDancer;

}


