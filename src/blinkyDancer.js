var extend = function(copyTo, copyFrom) {
  for(var key in copyFrom) {
    copyTo[key] = copyFrom[key];
  }
};



var dancerMethods = {
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

var makeDancer = function(left, top) {
  
  var dancer = {
    top : top,
    left : left,
    frequency : Math.random() * 2000,
    $moneyMaker : $('<span class="dancer"></span>'),
  }; // end dancer

  extend(dancer, dancerMethods);

  dancer.getInPosition();
  return dancer;
};


var makeBlinkyDancer = function(left, top){

  var blinkyDancer = {
    top : top,
    left : left,
    frequency : Math.random() * 2000,
    $moneyMaker : $('<span class="blinky-dancer"></span>'),
  }; // end blinkyDancer

  extend(blinkyDancer, dancerMethods);

  blinkyDancer.step = function(){
    this.getInPosition();
    this.blink();
  };

  blinkyDancer.blink = function(){
    this.$moneyMaker.toggle();
  };

  blinkyDancer.getInPosition();
  return blinkyDancer;
};
