var ButtShakingDancer = function(left, top) {
	this.moneyMaker.addClass('dancing-butt');
	this.left = left;
	this.top = top;
  	this.getInPosition();
}

var SnowManDancer = function(left, top) {
	this.moneyMaker.addClass('snow-man');
	this.left = left;
	this.top = top;
  	this.getInPosition();
}

ButtShakingDancer.prototype = new BlinkyDancer();
SnowManDancer.prototype = new BlinkyDancer();
