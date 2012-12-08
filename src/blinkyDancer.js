var BlinkyDancer = function(left, top){
      // we'll use top and left to set the position of this dancer
  this.top = top;
  this.left = left;

  // used in setInterval below
  this.frequency = Math.random() * 2000;

  // get dressed...
  this.moneyMaker = $("<span class='dancer'></span>");

  this.dance = function(){
    var self = this;
    // go out...
    this.moneyMaker.appendTo(".stage");
    // ...and do those sexy moves
    setInterval(function(){ self.step(); }, self.frequency);
  };

  this.step = function(){
    this.getInPosition();
    this.blink();
  };

  this.getInPosition = function(){
    var styleObj = {
      top: this.top,
      left: this.left
    };
    this.moneyMaker.css(styleObj);
  };

  this.blink = function(){
    this.moneyMaker.toggle();
  };
  
  this.getInPosition();
};
