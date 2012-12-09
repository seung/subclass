var Dancer = function (left, top){
  this.top = top;
  this.left = left;
  this.moneyMaker = $("<span class='dancer'></span>");
  this.getInPosition();
};

Dancer.prototype = {
  dance: function(){
    // go out...
    this.moneyMaker.appendTo(".stage");
    // ...and do those sexy moves
    var self = this;
    setInterval(function(){
      self.step();
    }, this.frequency);
  },

  step: function(){
    this.getInPosition();
    this.danceMove();
  },

  getInPosition: function(){
    var styleObj = {
      top: this.top,
      left: this.left
    };
    this.moneyMaker.css(styleObj);
  },

  danceMove: function(){
    this.moneyMaker.toggle();
  }
};


var BlinkyDancer = function(left, top){
  Dancer.apply(this, [left,top])
  // used in setInterval below
  this.frequency= Math.random() * 2000;
};

BlinkyDancer.prototype = new Dancer();


var RaveDancer = function(left, top) {
  Dancer.apply(this, [left, top]);
  this.frequency = 70;
};

RaveDancer.prototype = new Dancer();
RaveDancer.prototype.danceMove = function(){
  var randomColorGen = function() {
    var raveColors = ['rgb(255, 0, 204)','rgb(247, 255, 0)','rgb(94, 255, 0)','rgb(0, 255, 242)'];
    return raveColors[Math.floor(Math.random() * raveColors.length)];
  };
  var randomColor = randomColorGen(); 
  this.moneyMaker.css("border-color", randomColor);
};

var makeMoshPitDancer = function(left, top) {
  var moshPitDancer = new Dancer(left, top);
  moshPitDancer.moshPit = $('#moshPit');
  moshPitDancer.frequency = 500 ;
  moshPitDancer.getInPosition();
  moshPitDancer.moshPitPos = 200;
  moshPitDancer.dance = function(){
    moshPitDancer.moneyMaker.appendTo("#moshPit");
    setInterval(moshPitDancer.step, moshPitDancer.frequency);
  },
  moshPitDancer.step = function(){
    moshPitDancer.danceMove();
  },
  moshPitDancer.danceMove = function(){
    var newMoshTop = moshPitDancer.randomPos(moshPitDancer.moshPitPos, 1000, 200);
    var newMoshLeft = moshPitDancer.randomPos(moshPitDancer.moshPitPos, 2000, 1000);
    var newTop = moshPitDancer.randomPos(moshPitDancer.moshPitPos, 100, 100);
    var newLeft = moshPitDancer.randomPos(moshPitDancer.moshPitPos, 100, 100);
    moshPitDancer.moshPit.animate({top: newMoshTop, left: newMoshLeft});
    moshPitDancer.moneyMaker.animate({top: newTop, left: newLeft});
  };
  
  moshPitDancer.randomPos = function(original, max, maxChange){
     return original%max+Math.random()*maxChange;
  };
  return moshPitDancer;
};