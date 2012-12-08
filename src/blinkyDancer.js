var BlinkyDancer = function(left, top, newClass){
  newClass === undefined ? newClass = '' : newClass;
  
  var self = this;
  // we'll use top and left to set the position of this dancer
  self.top = top;
  self.left = left;
  // get dressed...
  self.moneyMaker = $("<span class='dancer "+ newClass +"'></span>");
  self.getInPosition();
};

BlinkyDancer.prototype.blink = function(){
  this.moneyMaker.toggle();
}; 

// used in setInterval below
BlinkyDancer.prototype.frequency = Math.random() * 2000;

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
  this.blink();
};
  
