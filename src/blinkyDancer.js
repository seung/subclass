var BlinkyDancer = function(left, top){

    // we'll use top and left to set the position of this dancer
    this.top = top;
    this.left = left;

    // used in setInterval below
    this.frequency = Math.random() * 2000;

    // get dressed...
    this.moneyMaker = $("<span class='dancer'></span>");


  
  this.getInPosition();
};

BlinkyDancer.prototype = {
dance: function(){
  // go out...
  this.moneyMaker.appendTo(".stage");
  // ...and do those sexy moves
  var self = this;
  var stepfunc = function () {
    self.step();
  };
  setInterval(stepfunc, this.frequency);
  },
  // console.log(this);

// created a variable to store the "this" before the dot so it won't refer to the 
//Window. below was when it was in BlinkyDancer properties above

    // var correctThis = this;


    // this.step = function(){
    //   correctThis.getInPosition();
    //   correctThis.blink();
    // };    
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

// var MyConstructor = function() {
//   this.doThing = function() {
//       blabla
//   }
// }

// is the same  as the below:

// var MyConstructor = function(left, top) {
//   this.top = something;
// };

// MyConstructor.prototype = {
//   doThing: function() {
//      blablabalb
//   }
// };