var BlinkyDancer = function(left, top){

    // we'll use top and left to set the position of this dancer
    this.top = top;
    this.left = left;

    // used in setInterval below
    this.frequency = Math.random() * 2000;

    // get dressed...
    this.moneyMaker = $("<span class='dancer'></span>");

    this.dance = function(){
      // go out...
      this.moneyMaker.appendTo(".stage");
      // ...and do those sexy moves
      setInterval(this.step, this.frequency);
    };
    // console.log(this);

// created a variable to store the "this" before the dot so it won't refer to the 
//Window 
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

    this.blink = function(){
      this.moneyMaker.toggle();
    };
  
  this.getInPosition();
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