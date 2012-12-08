var BlinkyDancer = function(left, top){
  var self = this;
  // we'll use top and left to set the position of this dancer
  self.top = top;
  self.left = left;
  self.getInPosition();
};

BlinkyDancer.prototype.blink = function(){
  this.moneyMaker.toggle();
}; 

// used in setInterval below
BlinkyDancer.prototype.frequency = Math.random() * 2000;

// get dressed...
BlinkyDancer.prototype.moneyMaker = $("<span class='dancer'></span>");

BlinkyDancer.prototype.getInPosition = function(){
    var styleObj = {
      top: this.top,
      left: this.left
    };
    this.moneyMaker.css(styleObj);
  };

BlinkyDancer.prototype.dance = function(){
    // go out...
    this.moneyMaker.appendTo(".stage");
    // ...and do those sexy moves
    var self = this;

    setInterval(function(){self.step();}, this.frequency);
  };

BlinkyDancer.prototype.step = function(){
  this.getInPosition();
  // this.blink();
};
  
