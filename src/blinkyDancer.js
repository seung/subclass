var BlinkyDancer = function(left, top) {
	Dancer.apply(this, [left, top]);
  this.danceMove = function(){
    this.moneyMaker.toggle();
  };
};

BlinkyDancer.prototype = new Dancer();