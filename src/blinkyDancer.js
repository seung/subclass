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

  return dancer;
};


var makeFadeyDancer = function(left, top) {
  var dancer = makeBlinkyDancer(left, top);
  dancer.moneyMaker.css('border-color', 'purple');
  dancer.blink = function () {
    dancer.moneyMaker.fadeToggle();
  };
  return dancer;
};

var makeColorDancer = function(left, top) {
  var dancer = makeBlinkyDancer(left, top);
  dancer.colors = ['green','orange','blue','goldenrod','cyan','yellow'];
  dancer.blink = function () {
    var number = Math.floor(Math.random()*5);
    var randomcolor = this.colors[number];
    dancer.moneyMaker.css('border-color',randomcolor);
  };
  return dancer;
};

var makeADancerAColorDancer = function(dancer){
dancer.blink = function(){

 dancer.moneyMaker.css('border-width',Math.floor(Math.random()*50));
}

};







