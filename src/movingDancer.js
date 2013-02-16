var isMusicPlaying = false;

var movingDancer = function(left, top){

  var mover = new DancerPrototype();
  mover.$moneyMaker = $('<div class="movingDancer"></div>');

  mover.dance = function(){
    mover.move();
    mover.turn();
    if(!isMusicPlaying) {
      $('body').append('<audio src="theTune.mp3" autoplay loop> <p>Your browser does not support the audio element </p> </audio>');
      isMusicPlaying = true;
    }
  };

  mover.move = function(){
    var dirHor = 1;
    var dirVer = 1;
    if (Math.random()<0.5){dirHor=-1;};
    if (Math.random()<0.5){dirVer=-1;};
    $('.movingDancer').animate({
      left: dirHor * Math.random() * $("body").width(),
      top: dirVer * Math.random() * $("body").height()
      }, Math.random() * 10000, function() {
        mover.move();
    });
  };

  mover.turn = function(){
    setInterval(function(){
      mover.$moneyMaker.css("background-image","url('img/Marcus3.png')");
      setTimeout(function(){mover.$moneyMaker.css("background-image","url('img/Marcus4.png')");},400);
      },800);
  }

  mover.getInPosition();
  
  return mover;
};