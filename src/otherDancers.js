var ButtShakingDancer = function(left, top) {
	BlinkyDancer.apply(this, [left, top, 'dancing-butt']);
}

var SnowManDancer = function(left, top) {
	BlinkyDancer.apply(this, [left, top, 'snow-man']);
}

ButtShakingDancer.prototype = new BlinkyDancer();
ButtShakingDancer.prototype.constructor = ButtShakingDancer;
SnowManDancer.prototype = new BlinkyDancer();
SnowManDancer.prototype.constructor = SnowManDancer;
