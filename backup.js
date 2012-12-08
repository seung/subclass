var blinkyDancer = function(left, top) {
  var blinkyDancer = makeDancer(left, top);
  blinkyDancer = {
    // used in setInterval below
    frequency: Math.random() * 2000,

    dance: function() {
      // go out...
      dancer.moneyMaker.appendTo(".stage");
      // ...and do those sexy moves
      setInterval(dancer.step, dancer.frequency);
    },

    step: function() {
      dancer.getInPosition();
      dancer.blink();
    },

    blink: function() {
      blinkyDancer.moneyMaker.toggle();
    }

  };
  blinkyDancer.moneyMaker.css({border: '11px solid green'});
  return blinkyDancer;
};
