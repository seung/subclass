var isMusicPlaying = false;
var isLinedUp = false;

var dance = function() {
  this.$moneyMaker.appendTo('.stage');
  setInterval(this.step, this.frequency());
};

var getInPosition = function () {
  var styleObj = {
    top: this.top,
    left: this.left
  };
  this.$moneyMaker.css(styleObj);
};

var lineUp = function(){
  this.$moneyMaker.animate({
    left: 20
  }, 6000);

  // this.$moneyMaker.css('left', '20px');
};


var dancer = {
    frequency: function(){return Math.random() * 2000;},
    dance: dance,
    lineUp: lineUp,
    getInPosition: getInPosition,
    };

var makeBlinkyDancer = function(left, top){

  var blinkyDancer = Object.create(dancer);
  blinkyDancer.blink = function(){
    blinkyDancer.$moneyMaker.toggle();
  };
    
  blinkyDancer.step = function(){
    // blinkyDancer.getInPosition();
    blinkyDancer.blink()
  };

  // blinkyDancer.getInPosition();
  return blinkyDancer;
};

var makeRedBlinky = function(left, top){
  console.log('test');
  var redBlinky = makeBlinkyDancer();
  redBlinky.$moneyMaker = $('<span class="redBlinkyDancer"></span>');
  redBlinky.top = top;
  redBlinky.left = left;
  redBlinky.getInPosition();
  return redBlinky;
};


var makeBlueBlinky = function(left, top){
  var blueBlinky = makeBlinkyDancer();
  blueBlinky.$moneyMaker = $('<span class="blueBlinkyDancer"></span>');
  blueBlinky.top = top;
  blueBlinky.left = left;
  blueBlinky.$moneyMaker.css('border-color', "rgb(" + Math.floor(Math.random() *256) + ','  + Math.floor(Math.random() *256) + ',' + Math.floor(Math.random() *256) + ')');
  blueBlinky.getInPosition();
  return blueBlinky;
};

var movingDancer = function(left, top){
  var mover = Object.create(dancer);
  mover.$moneyMaker = $('<span class="movingDancer"></span>');

  mover.dance = function(){
    mover.$moneyMaker.appendTo('.stage');
    setTimeout(mover.step, Math.random() * 1000);
    var disco = setInterval(function(){
      mover.$moneyMaker.css("background-image","url('img/Marcus3.png')");
      setTimeout(function(){mover.$moneyMaker.css("background-image","url('img/Marcus4.png')");},300);
      },600);
    
    setTimeout(disco(), 1000);
  };

  mover.step = function(){
    mover.getInPosition();
    var move = function(){
      var dirHor = 1;
      var dirVer = 1;
      if (Math.random()<0.5){dirHor=-1;};
      if (Math.random()<0.5){dirVer=-1;};
      $('.movingDancer').animate({
        left: dirHor * Math.random() * $("body").width(),
        top: dirVer * Math.random() * $("body").height()
        }, Math.random() * 6000, function() {
          move();
      });
    };
    var disco = setInterval(function(){
      mover.$moneyMaker.css("background-image","url('img/Marcus3.png')");
      setTimeout(function(){mover.$moneyMaker.css("background-image","url('img/Marcus4.png')");},300);
      },600);
    move();
  };

  if(isMusicPlaying === false) {$('body').append('<audio src="theTune.mp3" autoplay loop> <p>Your browser does not support the audio element </p> </audio>');}
  mover.getInPosition();
  isMusicPlaying = true;
  return mover;
};

var changingDancer = function(left,top) {
  var changer = Object.create(dancer);
  changer.$moneyMaker = $('<span class="changingDancer"></span>');
  changer.top = top;
  changer.left = left;

  frequency = Math.random() * 1000;

  changer.lineUp = function(){
    changer.$moneyMaker.css('left', '20px');
  }

  changer.step = function(){
    var changeColour = function(){
      
      var size = Math.random()*300;
      $('.changingDancer').animate({
        backgroundColor: "rgb(" + Math.floor(Math.random() *256) + ','  + Math.floor(Math.random() *256) + ',' + Math.floor(Math.random() *256) + ')' ,
        'border-radius': size+'px',
        height:size+'px',
        width:size+'px',
        top: this.top,
        left: this.left
        }, Math.random() * 6000, function() {
          changeColour();
      });
    };
    changeColour();
  };

  changer.getInPosition();
  return changer;
};





