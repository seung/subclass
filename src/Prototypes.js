//example of prototype  december 2012


// to step through in the console
debugger;

//we are creating a Maker or "factory" Dancer, and it has it's "stuff" that it can do or has
var Dancer = function(top, left){
  this.top = top;
  this.left = left;
  this.move = function(){};
  this.randomNumber = Math.random();
};

//we are creating a BlinkyDancer "factory" that contains the stuff
//that Dancer has, as well as it's own unique characteristic speed

var BlinkyDancer = function(top, left, speed){
  // under the hood: var this = Object.create(BlinkyDancer.prototype);
	Dancer.call(this, top, left);
	//another way of writing it Dancer.apply(this, [top,left]);

	this.speed = speed;
};

//these "factories" are created with intended that they will be used later because
//they have functions to do things.  New Objects(like ones below) don't have functions to do 
//things.  They just have unique characteristics ie) hair color

//here we are not creating a new "Factory", we are creating a unique dancer
//that will contains all the stuff Dancer has, as well a the color red
var maria = new Dancer(1, 11);
maria.color = 'red';

//here we are not creating a new "Factory", we are creating a unique dancer
//that contains all the stuff BlinkyDancer Factory has which right now is speed
//as well as contain all the stuff the Dancer Factory has because of BlinkyDancer's Dancer.call
var thomas = new BlinkyDancer(33, 44, 10000);

//using var something = new Somethingelse (Constructors being capitalized)
// is as if writing var something = Object.create(Somethingelse.prototype);
//something is created as Somethingelse's prototype(always remember the prototype part)
//if you don't remember the prototype part then it will not have a pointer to BlinkyDancer
// here we have created an instance thomas of BlinkyDancer which is a Constructor "factory"