var Dancer = function(left, top){
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

  this.getInPosition();
};