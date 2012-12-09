var Dancer = function(left, top){
  // we'll use top and left to set the position of this dancer
  this.top = top;
  this.left = left;

  // get dressed...
  this.moneyMaker = $("<span class='dancer'></span>");

  this.getInPosition = function(){
    this.moneyMaker.css({
      top: this.top,
      left: this.left
    });
  };

  this.getInPosition();
};

Dancer.prototype.dance = function(){
  // go out...
  this.moneyMaker.appendTo(".stage");
};

Dancer.prototype.step = function(){
  this.getInPosition();
};
