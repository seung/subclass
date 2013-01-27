var makeMoveyDancer = function(left, top){
  var dancer = makeBlinkyDancer(left, top);
  dancer.$moneyMaker = $('<span class="moveyDancer"></span>');

  dancer.dance = function(){
    this.$moneyMaker.appendTo('.stage');
    setTimeout(this.step, Math.random() * 1000);
  };

  dancer.step = function(){
    dancer.getInPosition();
    var move = function(){
      var dirHor = 1;
      var dirVer = 1;
      if (Math.random()<0.5){dirHor=-1;};
      if (Math.random()<0.5){dirVer=-1;};
      $('.moveyDancer').animate({
        left: dirHor * Math.random() * $("body").width(),
        top: dirVer * Math.random() * $("body").height()
        }, Math.random() * 6000, function() {
          move();
      });
    };
    move();
  };

  dancer.getInPosition();
  return dancer;
};