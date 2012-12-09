var BlinkyDancer = function(left, top){
    // we'll use top and left to set the position of this dancer
  this.top = top;
  this.left = left;
  // get dressed...
  this.moneyMaker = $("<span class='dancer'></span>");

  this.frequency = Math.random() * 2000;

  this.getInPosition();

};

BlinkyDancer.prototype.step = function(){
  this.getInPosition();
  this.blink();
};

BlinkyDancer.prototype.dance = function(){
  this.moneyMaker.appendTo(".stage");
  var self = this;
  setInterval(function(){
    self.step();
  }, this.frequency);
};

BlinkyDancer.prototype.blink = function(){
  this.moneyMaker.toggle();
};

BlinkyDancer.prototype.getInPosition = function(){
  var styleObj = {
    top: this.top,
    left: this.left
  };
  this.moneyMaker.css(styleObj);
};
