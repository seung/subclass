  var dance = function (){
    this.$moneyMaker.appendTo('.stage');
    var dancer = this;
    setInterval(function(){dancer.step()}, dancer.frequency)
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

  var blink = function (){
      this.$moneyMaker.toggle();
  };


  var dancer = {};
  dancer.dance = dance;
  dancer.step = step;
  dancer.getInPosition = getInPosition;
  dancer.blink = blink;


var makeBlinkyDancer = function(left, top){

  newDancer = Object.create(dancer);

  newDancer.top = top;
  newDancer.left = left;
  newDancer.frequency = Math.random()*2000;
  newDancer.$moneyMaker = $('<span class="dancer"></span>');

  newDancer.getInPosition();

  return newDancer;
};

var makeBlueDancer = function(left, top){
  newDancer = Object.create(dancer);

  newDancer.top = top;
  newDancer.left = left;
  newDancer.frequency = Math.random()*2000;
  newDancer.$moneyMaker = $('<span class="bluedancer"></span>');

  newDancer.getInPosition();

  return newDancer;
}