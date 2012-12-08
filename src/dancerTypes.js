var BlinkyDancer = function(left, top){
  // I hate javascript
  var self = this;
  // we'll use top and left to set the position of this this
  this.top = top;
  this.left = left;

  // used in setInterval below
  this.frequency = Math.random() * 2000;

  // get dressed...
  this.moneyMaker = $("<span class='dancer'></span>");

  this.dance = function(){
    // go out...
    this.moneyMaker.appendTo(".stage");
    // ...and do those sexy moves
    setInterval(this.step, this.frequency);
  }

  this.step = function(){
    self.getInPosition();
    self.danceMove();
  }

  this.getInPosition = function(){
    var styleObj = {
      top: self.top,
      left: self.left
    };
    self.moneyMaker.css(styleObj);
  }

  this.danceMove = function(){
    self.moneyMaker.toggle();
  }

  this.getInPosition();
};



var RaveDancer = function(left, top) {
  // I still hate js
  var self = this;
  this.frequency = 70;
  this.raveColors = ['rgb(255, 0, 204)','rgb(247, 255, 0)','rgb(94, 255, 0)','rgb(0, 255, 242)'];
  this.danceMove = function(){
    var randomColorGen = function() {
      return self.raveColors[Math.floor(Math.random() * self.raveColors.length)];
    };
    var randomColor = randomColorGen(); 
    this.moneyMaker.css("border-color", randomColor);
  };
};

RaveDancer.prototype = new BlinkyDancer();