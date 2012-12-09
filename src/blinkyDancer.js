var BlinkyDancer = function(left, top){
  // we'll use top and left to set the position of this dancer
  this.top = top;
  this.left = left;

  // used in setInterval below
  this.frequency = Math.random() * 2000;

  // get dressed...
  this.moneyMaker = $("<span class='dancer'></span>");

  this.getInPosition();

}; // this

BlinkyDancer.prototype.dance = function(){
  // go out...
  this.moneyMaker.appendTo(".stage");
  // ...and do those sexy moves
  var that = this;
  setInterval(function() {
    that.step();
  }, this.frequency);
};

BlinkyDancer.prototype.step = function(){  
  this.getInPosition();
  this.blink();
};

BlinkyDancer.prototype.getInPosition = function(){
  var styleObj = {
    top: this.top,
    left: this.left
  };
  this.moneyMaker.css(styleObj);
};

BlinkyDancer.prototype.blink = function(){
  this.moneyMaker.toggle();
};