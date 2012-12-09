var BlinkyDancer = function(left, top, newClass){
  // we'll use top and left to set the position of this dancer
  this.top = top;
  this.left = left;
  // used in setInterval below
  this.frequency = Math.random() * 2000;
  // get dressed...
  this.moneyMaker = $("<span class='dancer "+ (newClass || '') +"'></span>");
  this.getInPosition();
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
  this.blink();
};
  
