var BlinkyDancer = function(left, top){
  Dancer.apply(this, [left, top]);
};
BlinkyDancer.prototype = new Dancer();