var makeMoshPitDancer = function(left, top) {
  var moshPitDancer = makeBlinkyDancer(left, top);
  moshPitDancer.moshPit = $('#moshPit');
  moshPitDancer.frequency = 500 ;
  moshPitDancer.getInPosition();
  moshPitDancer.moshPitPos = 200;
  //var raveColors = ['#FF00CC','#F7FF00','#5EFF00','#00FFF2'];
  moshPitDancer.dance = function(){
    moshPitDancer.moneyMaker.appendTo("#moshPit");
    setInterval(moshPitDancer.step, moshPitDancer.frequency);
  },
  moshPitDancer.step = function(){
    moshPitDancer.danceMove();
  },
  moshPitDancer.danceMove = function(){
    moshPitDancer.moshPit.animate({top: moshPitDancer.moshPitPos%1000+Math.random()*200, left: moshPitDancer.moshPitPos%2000+Math.random()*1000})
    moshPitDancer.moneyMaker.animate({top: moshPitDancer.top%100+Math.random()*100, left: moshPitDancer.left%100+Math.random()*100});
  };
  return moshPitDancer ;
}; 