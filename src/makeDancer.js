var makeDancer = function(left, top){
  var dancer = {
    // we'll use top and left to set the position of this dancer
    top: top,
    left: left,

    // get dressed...
    moneyMaker: $("<span class='dancer'></span>"),

    dance: function(moves){
      // go out...
      dancer.moneyMaker.appendTo(".stage");
      // ...and do those sexy moves
      moves;
    },

    step: function(){
      dancer.getInPosition();
    },

    getInPosition: function(){
      var styleObj = {
        top: dancer.top,
        left: dancer.left
      };
      dancer.moneyMaker.css(styleObj);
    }

  }; // dancer
  
  dancer.getInPosition();

  return dancer;
};
