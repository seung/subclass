  var BlinkyDancer = function(left, top){

    // we'll use top and left to set the position of this dancer
    this.top = top;
    this.left = left;

    // used in setInterval below
    this.frequency = Math.random() * 2000;

    // get dressed...
    this.moneyMaker = $("<span data-idnumber='"+ this.length +"'class='dancer'></span>");
    
    this.getInPosition();

  
};

//don't need "this". Keep it mind BlinkyDancer.prototype is an object
BlinkyDancer.prototype = {
    dance: function(){
      // go out...
      this.moneyMaker.appendTo(".stage");
      // ...and do those sexy moves
      
      var self = this;
      var stepfn = function(){
        this.step();
      };

      setInterval(stepfn, this.frequency);
    },

    step: function(){
      this.getInPosition();
      this.blink();
    },

    getInPosition: function(){
      var styleObj = {
        top: this.top,
        left: this.left
      };
      this.moneyMaker.css(styleObj);
    },

    blink: function(){
      this.moneyMaker.toggle();
    }
};

//in the above function this.dance = function()....
//it is written the same as below
// BlinkyDancer.prototype.dance = function(){
//   
//      this.moneyMaker.appendTo(".stage");
     
 //     setInterval(this.step, this.frequency);
 //   };

//simply delete function this.dance = function()...
//and replace it with the .prototype.dance...
//The differences mean that any prototype pointed to a factory
//that points to BlinkyDancer factory will go up the delegation chain
// if the function this.blink = function()... was already in BlinkyDancer
//then any prototypes pointing to the factory that points to Blinky Dancer
//will automatically have the stuff BlinkyDancer has
//example is in blinkyDancerSpec.js
//bob = new FadeyDancer(30,40)
//bob is a prototype(pointing to) FadeyDancer Factory. While the FadeyDancer 
//factory is pointing to the main factory BlinkyDancer because of the code
//BlinkyDancer.apply
//bob will automatically contain all the stuff in BlinkyDancer, but 
//if there is a BlinkyDancer.prototype.dance....then bob will not
//automatically have the property dance since FadeyDancer doesn't have a dance function


var FadeyDancer = function(left, top) {
  BlinkyDancer.apply(this, [left, top]);
  this.moneyMaker.css('border-color', 'purple');
  this.blink = function () {
    this.moneyMaker.fadeToggle();
  };
};

  makeFadeyDancer.prototype = new BlinkyDancer();
  

var ColorDancer = function(left, top) {
  BlinkyDancer.apply(this, [left, top]);
  this.colors = ['green','orange','blue','goldenrod','cyan','yellow'];
  this.blink = function () {
    var number = Math.floor(Math.random()*5);
    var randomcolor = this.colors[number];
    this.moneyMaker.css('border-color',randomcolor);
  };

  ColorDancer.prototype = new BlinkyDancer();
};

var ShapeDancer = function (left, top) {
  BlinkyDancer.apply(this, [left, top]);
  this.shapes = ['heart', 'space-invader', 'yin-yang', 'pacman','infinity'];
  this.blink = function () {
    var number = Math.floor(Math.random()*5);
    var randomshape = this.shapes[number];
    this.moneyMaker.attr('id', randomshape);
  };


  ShapeDancer.prototype = new BlinkyDancer();

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