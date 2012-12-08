var blinkyDancer = function(left, top) {
  var blinkyDancer = makeDancer(left, top);
  blinkyDancer.frequency = Math.random() * 2000;
  blinkyDancer.dance = function() {
    // go out...
    blinkyDancer.moneyMaker.appendTo(".stage");
    // ...and do those sexy moves
    setInterval(blinkyDancer.step, blinkyDancer.frequency);
  };
  blinkyDancer.step = function() {
      blinkyDancer.getInPosition();
      blinkyDancer.blink();
  };
  blinkyDancer.blink = function() {
      blinkyDancer.moneyMaker.toggle();
  };
  blinkyDancer.moneyMaker.css({border: '11px solid green'});
  return blinkyDancer;
};
