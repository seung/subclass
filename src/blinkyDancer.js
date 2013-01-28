//use object called blinkyDancer and whateverobect.create
var blinkyDancerConstructor = function(left, top){
  // var blinkyDancer = makeDancer(frequency, left, top, $moneyMaker);
  var $moneyMaker = $('<span class="dancer"></span>');
  var frequency = Math.random() * 2000;
  this.left = left;
  //blinkyDancerConstructor.prototype = new dancerConstructor(frequency, left, top, $moneyMaker);
};

// STILL WORKING IN THIS FILE: need to update how the above constructor works so it sets the appropriate parameters (left, right, etc.)

blinkyDancerConstructor.protoype = Object.create(dancerConstructor.prototype);

blinkyDancerConstructor.prototype.blink = function(){
  this.$moneyMaker.toggle();
};

blinkyDancerConstructor.prototype.step = function(){
  this.getInPosition();
  this.blink();
};
