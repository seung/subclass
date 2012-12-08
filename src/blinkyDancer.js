var BlinkyDancer = function(left, top){
  var self = this;
  self.top = top;
  self.left = left;

  self.frequency = Math.random() * 2000;
  self.moneyMaker = $("<span class='dancer'></span>");
  self.getInPosition(self.top, self.left);
};

BlinkyDancer.prototype.dance = function(){ 
  this.moneyMaker.appendTo(".stage").on('mouseover', dispatch);

  var self = this;
  function move() { 
    self.getInPosition( Math.random() * window.innerHeight,
                        Math.random() * window.innerWidth)
  };

  this.getInPosition(-200, Math.random() * window.innerWidth);
  setInterval(move, this.frequency);
};

BlinkyDancer.prototype.getInPosition = function(t, l) {
 this.moneyMaker.css({top: t, left: l});
};

BlinkyDancer.prototype.step = function(){ 
  dancer.getInPosition();
};

BlinkyDancer.prototype.dispatch = function() { 
  window.currentMagic($(this), dancer) 
};