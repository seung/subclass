var makeBlinkyDancer = function(left, top){
  function dispatch() { window.currentMagic($(this), dancer) }
  var dancer = {
    top: top,
    left: left, 
    frequency: Math.random() * 2000,
    moneyMaker: $("<span class='dancer'></span>"),
    dance: function(){ 
      this.moneyMaker.appendTo(".stage").on('mouseover', dispatch)
      var self = this;
      function move() { 
        self.getInPosition(Math.random() * window.innerHeight,
        Math.random() * window.innerWidth)
      }
      this.getInPosition(-200, Math.random() * window.innerWidth);
      setInterval(move, this.frequency)
    },
    getInPosition: function(t, l){ return dancer.moneyMaker.css({top: t, left:l }) },
    step: function(){ dancer.getInPosition() },
    blink: function(){ this.moneyMaker.toggle() }
  }; 

  return dancer.getInPosition(dancer.top, dancer.left) && dancer;
};
