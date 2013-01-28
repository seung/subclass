var lineUp = function(direction) {
  for (var i = 0; i < window.dancers.length; i++) {
    if (window.dancers[i].canLineUp) {
      window.dancers[i].left = 0;
    };
  };
};

/*
Dancer Maker & Prototype
*/

var dancerMaker = function(left, top) {
  var dancer = Object.create(dancerPrototype);
  dancer.left = left;
  dancer.top = top;
  dancer.frequency = Math.random() * 2000;
  dancer.$moneyMaker = $('<span class="dancer"></span>');
  dancer.getInPosition();
  return dancer;
};

var dancerPrototype = {
  dance: function (){
    this.$moneyMaker.appendTo('.stage');
    // console.log(this);
    var dancer = this;
    setInterval(function(){
      dancer.step();
    }, dancer.frequency );
  },
  getInPosition: function(){
    var styleObj = {
      top: this.top,
      left: this.left
    };
    this.$moneyMaker.css(styleObj);
  },
  step: function(){
    this.getInPosition();
  },
  canLineUp: false
};


/*
blinky Maker & Prototype
*/

var blinkyMaker = function(left, top){
  var blinky = Object.create(blinkyPrototype);
  blinky.left = left;
  blinky.top = top;
  blinky.frequency = Math.random() * 1000;
  blinky.$moneyMaker = $('<span class="blinky-dancer"></span>');
  blinky.getInPosition();
  return blinky;
};

var blinkyPrototype = Object.create(dancerPrototype);  // on a failed lookup, bP delegates to dancerPrototype
blinkyPrototype.blink = function(){
  this.$moneyMaker.toggle();
};
blinkyPrototype.step = function() {
  this.getInPosition();
  this.blink();
};


/*
muffin Maker & Prototype
*/

var muffinMaker = function(left, top) {
  var muffin = Object.create(muffinPrototype);
  muffin.left = left;
  muffin.top = top;
  muffin.frequency = 500;
  // muffinDancer.$moneyMaker = $('<img src="img/MrCupcake.png" class="muffin-dancer">');
  muffin.$moneyMaker = $('<span class="muffin-dancer"></span>');
  muffin.getInPosition();
  return muffin;
}

var muffinPrototype = Object.create(dancerPrototype);


/*
walking Maker & Prototype
*/

var walkingMaker = function(left, top) {
  var walking = Object.create(walkingPrototype);
  walking.left = left;
  walking.top = top;
  walking.canLineUp = true;
  walking.frequency = 35;
  walking.$moneyMaker = $('<span class="rabies-dancer"></span>'); 
  walking.getInPosition();
  return walking;
};

var walkingPrototype = Object.create(dancerPrototype);
walkingPrototype.dX = 10;
walkingPrototype.dY = 10;
walkingPrototype.step = function() {
  this.getInPosition();
  this.walk();
};
walkingPrototype.walk = function(top, left){
  var floorWidth = $("body").width();
  var floorHeight = $("body").height();

  if (this.left < 0) this.dX *= -1;
  if (this.left + 65 > floorWidth) this.dX *= -1;
  if (this.top + 45 > floorHeight) this.dY *= -1;
  if (this.top < 0) this.dY *= -1;

  this.left += this.dX;
  this.top += this.dY;

  return true;
};
