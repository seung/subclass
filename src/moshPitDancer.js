var makeMoshPitDancer = function(left, top) {
  var moshPitDancer = makeBlinkyDancer(left, top);
  moshPitDancer.moshPit = $('#moshPit');
  moshPitDancer.frequency = 500 ;
  moshPitDancer.getInPosition();
  moshPitDancer.moshPitPos = 200;
  moshPitDancer.dance = function(){
    moshPitDancer.moneyMaker.appendTo("#moshPit");
    setInterval(moshPitDancer.step, moshPitDancer.frequency);
  },
  moshPitDancer.step = function(){
    moshPitDancer.danceMove();
  },
  moshPitDancer.danceMove = function(){
    var newMoshTop = moshPitDancer.randomPos(moshPitDancer.moshPitPos, 1000, 200);
    var newMoshLeft = moshPitDancer.randomPos(moshPitDancer.moshPitPos, 2000, 1000);
    var newTop = moshPitDancer.randomPos(moshPitDancer.moshPitPos, 100, 100);
    var newLeft = moshPitDancer.randomPos(moshPitDancer.moshPitPos, 100, 100);
    moshPitDancer.moshPit.animate({top: newMoshTop, left: newMoshLeft});
    moshPitDancer.moneyMaker.animate({top: newTop, left: newLeft});
  };
  
  moshPitDancer.randomPos = function(original, max, maxChange){
     return original%max+Math.random()*maxChange;
  };
  return moshPitDancer;
};