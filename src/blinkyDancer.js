var BlinkyDancer = function(left, top){
      // we'll use top and left to set the position of this dancer
  this.top = top;
  this.left = left;

  // used in setInterval below
  this.frequency = Math.random() * 2000;

  // get dressed...
  this.moneyMaker = $("<span class='dancer'></span>");

  this.getInPosition = function(){
    var styleObj = {
      top: this.top,
      left: this.left
    };
    this.moneyMaker.css(styleObj);
  };

  this.dance = function(){
    var self = this;
    // go out...
    this.moneyMaker.appendTo(".stage");
    // ...and do those sexy moves
    setInterval(function(){ self.step(); }, this.frequency);
  };
  
  this.getInPosition();
};

BlinkyDancer.prototype.step = function(){
  this.getInPosition();
  this.blink();
};

BlinkyDancer.prototype.blink = function(){
  this.moneyMaker.toggle();
};