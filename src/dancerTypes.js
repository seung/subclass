var makeBlinkyDancer = function(left, top){
  var dancer = {
    // we'll use top and left to set the position of this dancer
    top: top,
    left: left,

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
      dancer.danceMove();
    },

    getInPosition: function(){
      var styleObj = {
        top: dancer.top,
        left: dancer.left
      };
      dancer.moneyMaker.css(styleObj);
    },

    danceMove: function(){
      dancer.moneyMaker.toggle();
    }

  }; // dancer
  
  dancer.getInPosition();

  return dancer;
};

var makeRaveDancer = function(left, top) {
  var raveDancer = makeBlinkyDancer(left, top);
  raveDancer.frequency = 70 ;
  var raveColors = ['#FF00CC','#F7FF00','#5EFF00','#00FFF2'];
  raveDancer.danceMove = function(){
    var randomColorGen = function() {
      return raveColors[Math.floor(Math.random() * raveColors.length)];
    };

    var randomColor = randomColorGen(); 
    raveDancer.moneyMaker.css("border-color", randomColor);
  };
  return raveDancer;
};