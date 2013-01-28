var movingDancer = function(left, top){
  var isMusicPlaying = false;
  var mover = new DancerPrototype();
  mover.$moneyMaker = $('<div class="movingDancer"></div>');

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
    setInterval(function(){
      mover.$moneyMaker.css("background-image","url('img/Marcus3.png')");
      setTimeout(function(){mover.$moneyMaker.css("background-image","url('img/Marcus4.png')");},400);
      },800);
    move();

  };

  if(isMusicPlaying === false) {$('body').append('<audio src="theTune.mp3" autoplay loop> <p>Your browser does not support the audio element </p> </audio>');}
  mover.getInPosition();
  isMusicPlaying = true;
  
  return mover;
};