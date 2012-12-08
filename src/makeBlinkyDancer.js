var BlinkyDancer = function(left, top) {
  Dancer.apply(this, [left, top]);
  var self = this;

  this.frequency = Math.random() * 2000;
  this.dance = function() {
    // go out...
    this.moneyMaker.appendTo(".stage");
    // ...and do those sexy moves
    setInterval(self.step, self.frequency);
  };
  this.step = function() {
      self.getInPosition();
      self.blink();
  };
  this.blink = function() {
      this.moneyMaker.toggle();
  };
  this.moneyMaker.css({border: '11px solid green'});
};

BlinkyDancer.prototype = new Dancer();