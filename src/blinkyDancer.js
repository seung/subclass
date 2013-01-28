
var BlinkyPrototype = function(left, top){
new DancerPrototype(left,top);
};

BlinkyPrototype.prototype.step = function(){
    blinkyDancer.blink()
  };

BlinkyPrototype.prototype.blink = function(){
    this.$moneyMaker.toggle();
  };


var makeBlinkyDancer = function(left, top){

  var blinkyDancer = new BlinkyPrototype(left, top);
  return blinkyDancer;
};

var makeRedBlinky = function(left, top){
  var redBlinky = makeBlinkyDancer(left, top);
  redBlinky.$moneyMaker = $('<span class="redBlinkyDancer"></span>');
  redBlinky.getInPosition();
  return redBlinky;
};


var makeBlueBlinky = function(left, top){
  var blueBlinky = makeBlinkyDancer(left, top);
  blueBlinky.$moneyMaker = $('<span class="blueBlinkyDancer"></span>');
  blueBlinky.$moneyMaker.css('border-color', "rgb(" + Math.floor(Math.random() *256) + ','  + Math.floor(Math.random() *256) + ',' + Math.floor(Math.random() *256) + ')');
  blueBlinky.getInPosition();
  return blueBlinky;
};









