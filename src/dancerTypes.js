var BlinkyDancer = function(left, top){
      // we'll use top and left to set the position of this dancer
    this.top = top;
    this.left = left;

    // used in setInterval below
    this.frequency= Math.random() * 2000;

    // get dressed...
    this.moneyMaker = $("<span class='dancer'></span>");

  this.getInPosition();

  }; // dancer
  
BlinkyDancer.prototype.dance = function(){
  // go out...
  this.moneyMaker.appendTo(".stage");
  // ...and do those sexy moves
  var self = this;
  setInterval(function(){
    self.step();
  }, this.frequency);
};

BlinkyDancer.prototype.step = function(){
  this.getInPosition();
  this.danceMove();
};

BlinkyDancer.prototype.getInPosition = function(){
  var styleObj = {
    top: this.top,
    left: this.left
  };
  this.moneyMaker.css(styleObj);
};

BlinkyDancer.prototype.danceMove = function(){
  this.moneyMaker.toggle();
};




var RaveDancer = function(left, top) {
  this.top = top;
  this.left = left;
  this.frequency = 70 ;
  console.log("raveDancer");
  this.danceMove = function(){
    var randomColorGen = function() {
      var raveColors = ['rgb(255, 0, 204)','rgb(247, 255, 0)','rgb(94, 255, 0)','rgb(0, 255, 242)'];
      return raveColors[Math.floor(Math.random() * raveColors.length)];
    };

    var randomColor = randomColorGen(); 
    this.moneyMaker.css("border-color", randomColor);
  };
};

RaveDancer.prototype = new BlinkyDancer();
