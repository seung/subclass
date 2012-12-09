var Dancer = function(left, top){
  // we'll use top and left to set the position of this this
  this.top = top;
  this.left = left;

  // used in setInterval below
  this.frequency = Math.random() * 2000;

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
  var self = this;
  // go out...
  this.moneyMaker.appendTo(".stage");
  // ...and do those sexy moves
  setInterval(function(){self.step();}, this.frequency);
};

Dancer.prototype.step = function(){
  this.getInPosition();
  this.danceMove();
};