var makeDancer = function(left, top) {
  var dancer = Object.create(dancerPrototype);
  dancer.top = top;
  dancer.left = left;
  dancer.frequency = Math.random() * 2000;
  dancer.$moneyMaker = $('<span class="dancer"></span>');
  dancer.getInPosition();
  return dancer;
};

var dancerPrototype = {
  dance : function(){
    this.$moneyMaker.appendTo('.stage');
    var that = this;
    setInterval(function() {
      that.step();
    }, this.frequency);
  },

  step : function(){
    this.getInPosition();
  },

  getInPosition : function(){
    var styleObj = {
      top: this.top,
      left: this.left
    };
    this.$moneyMaker.css(styleObj);
  }
};

var makeBlinkyDancer = function(left, top){
  var blinkyDancer = Object.create(blinkyDancerPrototype);
  blinkyDancer.top = top;
  blinkyDancer.left = left;
  blinkyDancer.frequency = Math.random() * 2000;
  blinkyDancer.$moneyMaker = $('<span class="blinky-dancer"></span>');
  blinkyDancer.getInPosition();
  return blinkyDancer;
};

var blinkyDancerPrototype = Object.create(dancerPrototype);
blinkyDancerPrototype.step = function(){
  this.getInPosition();
  this.blink();
};
blinkyDancerPrototype.blink = function(){
  this.$moneyMaker.toggle();
};