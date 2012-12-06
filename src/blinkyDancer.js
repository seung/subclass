var makeBlinkyDancer = function(left, top){
  var dancer = {
    // we'll use top and left to set the position of this dancer
    top: top,
    left: left,

    // used in setInterval below
    frequency: Math.random() * 2000,

    // get dressed...
    moneyMaker: $("<span data-idnumber='"+ dancers.length +"'class='dancer'></span>"),

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

var makeShapeDancer = function (left, top) {
  var dancer = makeBlinkyDancer(left, top);
  dancer.shapes = ['heart', 'space-invader', 'yin-yang', 'pacman','infinity'];
  dancer.blink = function () {
    var number = Math.floor(Math.random()*5);
    var randomshape = this.shapes[number];
    dancer.moneyMaker.attr('id', randomshape);
  };
  return dancer;
};

//mix-ins
var makeADancerASizeDancer = function(dancer){
  dancer.blink = function(){
    dancer.moneyMaker.css('border-width',Math.floor(Math.random()*50));
  }
};

var makeDancersMove = function(dancer){
  dancer.move = function(){
    var curtop= this.top-(Math.floor(Math.random()*20-(Math.random()*20) ));
    var curleft= this.left-(Math.floor(Math.random()*20-(Math.random()*20) ));
    this.top= curtop;
    this.left= curleft;
    dancer.moneyMaker.css('top', curtop);
    dancer.moneyMaker.css('left', curleft);
  }
  
  dancer.movement = function(){
    dancer.move();
  };

  dancer.makemove = function(){
    setInterval(dancer.movement, dancer.frequency);
  };

  dancer.makemove();
};

/*makeDancersMove = function () {
  move = function(){
    var curtop= this.top-(Math.floor(Math.random()*50-(Math.random()*50) ));
    var curleft= this.left-(Math.floor(Math.random()*50-(Math.random()*50) ));
    dancer.moneyMaker.css('top', curtop);
    dancer.moneyMaker.css('left', curleft);
  };
  makemove= function(){
    setInterval(move, this.frequency);
  };
  for (var i in dancers){
    dancers[i].move=move;
    dancers[i].makemove = makemove;
    dancers[i].makemove();
  }
}; */









