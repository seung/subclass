var BlinkyDancer = function(left, top) {
  Dancer.apply(this, [left, top]);

  this.frequency = Math.random() * 2000;
  this.dance = function() {
    // go out...
    this.moneyMaker.appendTo(".stage");
    // ...and do those sexy moves
    var self = this;
    setInterval(function(){self.step();}, this.frequency);
  };
  this.step = function() {
    this.getInPosition();
    this.blink();
  };
  this.blink = function() {
    this.moneyMaker.toggle();
  };

  this.moneyMaker.css({border: '11px solid green'});
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;