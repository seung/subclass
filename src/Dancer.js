var Dancer = function(left, top){
    this.top = top;
    this.left = left;
    this.frequency = Math.random() * 2000;
    this.moneyMaker = $("<span class='blinkyDancer'></span>");
    this.getInPosition();
};

Dancer.prototype.step = function(){
  this.getInPosition();
  this.blink();
};

Dancer.prototype.blink = function(){
  this.moneyMaker.toggle();
};

Dancer.prototype.getInPosition = function(){
  var styleObj = {
    top: this.top,
    left: this.left
  };
  this.moneyMaker.css(styleObj);
};

Dancer.prototype.dance = function(){
  this.moneyMaker.appendTo(".stage");
  var self = this;  
  setInterval(function(){self.step();}, this.frequency);
};