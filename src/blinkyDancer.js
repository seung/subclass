// ORIGINAL DANCER
var Dancer = function(left, top){
    // we'll use top and left to set the position of this dancer
    this.top = top;
    this.left = left;

    // used in setInterval below
    this.frequency = Math.random() * 2000;

    // get dressed...
    this.moneyMaker = $("<span data-idnumber='"+ dancers.length +"'class='dancer'></span>");

    this.step = function(){
      this.getInPosition();
      this.blink();
    };

    this.getInPosition = function(){
      var styleObj = {
        top: this.top,
        left: this.left
      };
      this.moneyMaker.css(styleObj);
    };

    this.blink = function(){

    };

    this.dance = function(){
      // go out...
      this.moneyMaker.appendTo(".stage");
      // ...and do those sexy moves
      var tempThis = this;
      setInterval(function() { tempThis.step() }, this.frequency);
    };

  this.getInPosition();

};

var BlinkyDancer = function(left, top) {
  Dancer.apply(this,[left,top]);
  this.blink = function (){
    this.moneyMaker.toggle();
  };
};

// TYPES OF DANCERS (inherits from Dancer)
var FadeyDancer = function(left, top) {
  this.__proto__ = new Dancer(left, top);
  this.moneyMaker.css('border-color', 'purple');
  this.blink = function () {
    this.moneyMaker.fadeToggle();
  };
}

var ColorDancer = function(left, top) {
  this.__proto__ = new Dancer(left, top);
  this.colors = ['green','orange','blue','goldenrod','cyan','yellow'];
  this.blink = function () {
    var number = Math.floor(Math.random()*5);
    var randomcolor = this.colors[number];
    this.moneyMaker.css('border-color',randomcolor);
  };
};

var ShapeDancer = function (left, top) {
  this.__proto__ = new Dancer(left, top);
  this.shapes = ['heart', 'space-invader', 'yin-yang', 'pacman','infinity'];
  this.blink = function () {
    var number = Math.floor(Math.random()*5);
    var randomshape = this.shapes[number];
    this.moneyMaker.attr('id', randomshape);
  };
};

var StarDancer = function (left, top) {
  this.__proto__ = new Dancer(left, top);
  // dancer.moneyMaker.css('border-color', 'black');
  this.moneyMaker.attr('id', 'star-five');
};

//MIX-INS
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












