// var lineUp = function(direction) {
//   for (var i = 0; i < window.dancers.length; i++) {
//     if (window.dancers[i].canLineUp) {
//       window.dancers[i].left = 0;
//     };
//   };
// };

// var dance = function (){
//   this.$moneyMaker.appendTo('.stage');
//   // console.log(this);
//   var dancer = this;
//   setInterval(function(){
//     dancer.step();
//   }, dancer.frequency );
// };

// var step = function(){
//   this.getInPosition();
//   this.blink();
// };

// var getInPosition = function(){
//   var styleObj = {
//     top: this.top,
//     left: this.left
//   };
//   this.$moneyMaker.css(styleObj);
// };

// var blink = function(){
//   this.$moneyMaker.toggle();
// };

// var walk = function(top, left){
//   var floorWidth = $("body").width();
//   var floorHeight = $("body").height();
  
//   this.detectCollisions();

//   if (this.left < 0) this.dX *= -1;
//   if (this.left + 65 > floorWidth) this.dX *= -1;
//   if (this.top + 45 > floorHeight) this.dY *= -1;
//   if (this.top < 0) this.dY *= -1;

//   this.left += this.dX;
//   this.top += this.dY;

//   return true;
// };


// var MetaDancer = function (left, top){
//   this.top = top;
//   this.left = left;
//   this.dance = dance;
//   this.step = step;
//   this.getInPosition = getInPosition;
//   this.blink = blink;
//   this.walk = walk;
//   this.canLineUp = false;
//   this.frequency = Math.random() * 2000;
//   this.$moneyMaker = $('<span class="dancer"></span>');
//   this.dX = 5;
//   this.dY = 5;
//   this.detectCollisions = detectCollisions;
// };

// // makeBlinkyDancer.prototype.


// var makeBlinkyDancer = function(left, top){
//   var blinkyDancer = new MetaDancer(left, top);
//   blinkyDancer.getInPosition();
//   return blinkyDancer;
// };

// var makeMuffinDancer = function(left, top) {
//   var muffinDancer = new MetaDancer(left, top);
//   muffinDancer.frequency = 10;
//   // muffinDancer.$moneyMaker = $('<img src="img/MrCupcake.png" class="muffin-dancer">');
//   muffinDancer.$moneyMaker = $('<span class="muffin-dancer"></span>');
//   muffinDancer.getInPosition();
//   muffinDancer.step = function() {
//     muffinDancer.getInPosition();
//     muffinDancer.walk();
//   };
//   return muffinDancer;
// }


// var makeRabiesDancer = function(left, top) {
//   var rabiesDancer = new MetaDancer(left, top);
//   rabiesDancer.canLineUp = true;
//   rabiesDancer.frequency = 35;
//   // rabiesDancer.$moneyMaker = $('<img src="img/Toter.png" class="rabies-dancer">');
//   rabiesDancer.$moneyMaker = $('<span class="rabies-dancer"></span>');
  
//   rabiesDancer.dX = 30;
//   rabiesDancer.dY = 30;

//   rabiesDancer.step = function() {
//     rabiesDancer.getInPosition();
//     rabiesDancer.walk();
//   };

//   rabiesDancer.getInPosition();

//   return rabiesDancer;
// }


// /*
// every half second, we grab the array of all dancers on screen
// we iterate through each object on the array and comapare its X,Y coordinates to all neighbors
// if the distance is less than an acceptable amount, we send the two objects away from each other

// we need to keep track of:

// - a set interval that does an n2 loop over all objects in window.dancers
// -
// - each dancer's position 
// - how position when dX and dY change
// - a maximum acceptable collision distance
// */


// var detectCollisions = function() {
//   var repulsionDistance = 30;
//   for(var i = 0; i < window.dancers.length; i++) {
//     if (this != window.dancers[i]){
//      if ((Math.abs(window.dancers[i].top - this.top) < repulsionDistance) && 
//         (Math.abs(window.dancers[i].left - this.left) < repulsionDistance))  {
//         this.dX *= -1;
//         this.dY *= -1;
//       };
//     }
//   }
// }