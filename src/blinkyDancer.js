var lineUp = function(direction) {
  for (var i = 0; i < window.dancers.length; i++) {
    if (window.dancers[i].canLineUp) {
      window.dancers[i].left = 0;
    };
  };
};

/*
Dancer Constructor & Prototype (using Pseudoclassical Instantiation)
*/

var Dancer = function(left, top) {
  this.left = left;
  this.top = top;
  this.frequency = Math.random() * 2000;
  this.$moneyMaker = $('<span class="dancer"></span>');
  this.getInPosition();
};
Dancer.prototype.dance = function (){
  this.$moneyMaker.appendTo('.stage');
  // console.log(this);
  var dancer = this;
  setInterval(function(){
    dancer.step();
  }, dancer.frequency );
};
Dancer.prototype.getInPosition = function(){
  var styleObj = {
    top: this.top,
    left: this.left
  };
  this.$moneyMaker.css(styleObj);
};
Dancer.prototype.step = function(){
  this.getInPosition();
};
Dancer.prototype.canLineUp = false;

/*
blinky Constructor & Prototype
*/

var BlinkyDancer = function(left, top){
  this.left = left;
  this.top = top;
  this.frequency = Math.random() * 1000;
  this.$moneyMaker = $('<span class="blinky-dancer"></span>');
  this.getInPosition();
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.blink = function(){
  this.$moneyMaker.toggle();
};
BlinkyDancer.prototype.step = function() {
  this.getInPosition();
  this.blink();
};

/*
muffin Constructor & Prototype
*/

var MuffinDancer = function(left, top) {
  this.left = left;
  this.top = top;
  this.frequency = 500;
  this.$moneyMaker = $('<img src="img/MrCupcake.png" class="muffin-dancer">');
  // this.$moneyMaker = $('<span class="muffin-dancer"></span>');
  this.getInPosition();
};

MuffinDancer.prototype = Object.create(Dancer.prototype);

/*
walking Constructor & Prototype
*/

var WalkingDancer = function(left, top) {
  this.left = left;
  this.top = top;
  this.canLineUp = true;
  this.frequency = 35;
  this.$moneyMaker = $('<img src="img/Toter.png" class="walking-dancer">');
  // this.$moneyMaker = $('<span class="walking-dancer"></span>'); 
  this.getInPosition();
};

WalkingDancer.prototype = Object.create(Dancer.prototype);
WalkingDancer.prototype.dX = 10;
WalkingDancer.prototype.dY = 10;
WalkingDancer.prototype.step = function() {
  this.getInPosition();
  this.walk();
};
WalkingDancer.prototype.detectCollisions = function() {
  var repulsionDistance = 30;
  for(var i = 0; i < window.dancers.length; i++) {
    if (this != window.dancers[i]){
     if ((Math.abs(window.dancers[i].top - this.top) < repulsionDistance) && 
        (Math.abs(window.dancers[i].left - this.left) < repulsionDistance))  {
        this.dX *= -1;
        this.dY *= -1;
      };
    }
  }
};
WalkingDancer.prototype.walk = function(top, left){
  var floorWidth = $("body").width();
  var floorHeight = $("body").height();
  this.detectCollisions();
  if (this.left < 0) this.dX *= -1;
  if (this.left + 65 > floorWidth) this.dX *= -1;
  if (this.top + 45 > floorHeight) this.dY *= -1;
  if (this.top < 0) this.dY *= -1;

  this.left += this.dX;
  this.top += this.dY;

  return true;
};