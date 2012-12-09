//this is the main factory

var BlinkyDancer = function(left, top){

    // we'll use top and left to set the position of this dancer
    this.top = top;
    this.left = left;

    // used in setInterval below
    this.frequency = Math.random() * 2000;

    // get dressed...
    this.moneyMaker = $("<span data-idnumber='"+ this.length +"'class='dancer'></span>");

//the dance function inside of BlinkyDancer factory
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

    this.blink = function(){
      this.moneyMaker.toggle();
    };
  
  this.getInPosition();

  
};

//in the above function this.dance = function()....
//it can be written as the same as below
// BlinkyDancer.prototype.dance = function(){
//   
//      this.moneyMaker.appendTo(".stage");
     
 //     setInterval(this.step, this.frequency);
 //   };

//To do this instead, simply delete the function this.dance = function()...
//inside the BlinkyDancer factory
//and replace it with the .prototype.dance... outside of the BlinkyDancer factory
//Writing the prototype function outside of the BlinkyDancer factory
//means that any object's prototype ie) bob pointed to a factory ie)FadeyDancer
//that points to BlinkyDancer factory will go up the delegation chain to find
//the dance method.
// if the function this.dance = function()... was already in BlinkyDancer
//then any prototypes ie) bob pointing to the factory FadeyDancer that points to Blinky Dancer factory
//will automatically have the stuff BlinkyDancer has

//bob = new FadeyDancer(30,40)
//bob is a prototype(pointing to) FadeyDancer Factory. While the FadeyDancer 
//factory is pointing to the main factory BlinkyDancer because of the code
//BlinkyDancer.apply in FadeyDancer
//bob will automatically contain all the stuff in BlinkyDancer, but 
//if it was written as BlinkyDancer.prototype.dance = ...instead then bob will not
//automatically have the method dance since FadeyDancer doesn't have a dance function
//bob with then look up the delegation chain find BlinkyDancer.apply method, and find
//the main factory BlinkyDancer and find the dance method.

//this is the 2nd factory
var FadeyDancer = function(left, top) {
  BlinkyDancer.apply(this, [left, top]);
  this.moneyMaker.css('border-color', 'purple');
  this.blink = function () {
    this.moneyMaker.fadeToggle();
  };
};

  // this establishes that FadeyDancer is a new Dancer that shares Blinky Dancer stuff
  FadeyDancer.prototype = new BlinkyDancer();
  //this is the same as saying var FadeyDancer = Object.create(BlinkyDancer.prototype);

  //this line is to repoint any prototypes under FadeyDancer ie) Bob, to share FadeyDancer's stuff also
//otherwise any of FadeyDancer's prototypes ie) bob, will only point to BlinkyDancer factory
  FadeyDancer.prototype.constructor = FadeyDancer;



//blinkyDancer is an instance of BlinkyDancer constructor. In other words,blinkyDancer is BlinkyDancer's prototype
//Furthermore, blinkyDancer shares all things BlinkyDancer has
   blinkyDancer = new BlinkyDancer(20, 10);
  //bob is an instance of FadeyDancer, and is the lowest part of the delegation chain
   bob = new FadeyDancer(30,40);
  