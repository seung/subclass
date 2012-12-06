var makeBlinkyDancer = function(left, top){
  var dancer = {
    // we'll use top and left to set the position of this dancer
    top: Math.floor(top),
    left: Math.floor(left),

    // used in setInterval below
    frequency: Math.random() * 2000,

    // get dressed...
    moneyMaker: $("<span class='dancer'></span>"),

    dance: function(){
      // go out...
      dancer.moneyMaker.appendTo(".stage");
      // ...and do those sexy moves
      setInterval(dancer.step, dancer.frequency);
    },

    step: function(){
      dancer.getInPosition();
      dancer.blink();
    },

    getInPosition: function(){
      var styleObj = {
        top: dancer.top,
        left: dancer.left
      };
      dancer.moneyMaker.css(styleObj);
    },

    blink: function(){
      dancer.moneyMaker.toggle();
    }

  }; // dancer
  
  dancer.getInPosition();
  // dancer.moneyMaker.text(window.dancers.length + 1);

  return dancer;
};
