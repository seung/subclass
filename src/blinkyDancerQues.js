var BlinkyDancer = function(left, top){

    // we'll use top and left to set the position of this dancer
    this.top = top;
    this.left = left;

    // used in setInterval below
    this.frequency = Math.random() * 2000;

    // get dressed...
    this.moneyMaker = $("<span data-idnumber='"+ this.length +"'class='dancer'></span>");

    this.dance = function(){
      // go out...
      this.moneyMaker.appendTo(".stage");
      // ...and do those sexy moves
      setInterval(this.step, this.frequency);
    };

    var correctThis = this;

    this.step = function(){
      correctThis.getInPosition();
      correctThis.blink();
    };

    this.getInPosition = function(){
      var styleObj = {
        top: this.top,
        left: this.left
      };
      this.moneyMaker.css(styleObj);
    };
  
  this.getInPosition();

  
};

BlinkyDancer.prototype.blink = function(){
      this.moneyMaker.toggle();
    };


var makeFadeyDancer = function(left, top) {
  this.moneyMaker.css('border-color', 'purple');
  this.blink = function () {
    this.moneyMaker.fadeToggle();
  };
};

makeFadeyDancer.prototype = new BlinkyDancer();
  

var ColorDancer = function(left, top) {
  BlinkyDancer.apply(this, [left,top]);
  dancer.colors = ['green','orange','blue','goldenrod','cyan','yellow'];
  dancer.blink = function () {
    var number = Math.floor(Math.random()*5);
    var randomcolor = this.colors[number];
    dancer.moneyMaker.css('border-color',randomcolor);
  };
  
};

makeColorDancer.prototype = new BlinkyDancer();


var makeShapeDancer = function (left, top) {
  var dancer = makeBlinkyDancer(left, top);
  dancer.shapes = ['heart', 'space-invader', 'yin-yang', 'pacman','infinity'];
  dancer.blink = function () {
    var number = Math.floor(Math.random()*5);
    var randomshape = this.shapes[number];
    dancer.moneyMaker.attr('id', randomshape);
  };

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









