var ButtShakingDancer = function(left, top) {
	BlinkyDancer.apply(this, [left, top, 'dancing-butt']);
	// self.moneyMaker.addClass('dancing-butt');
}

var SnowManDancer = function(left, top) {
	BlinkyDancer.apply(this, [left, top, 'snow-man']);
	// self.moneyMaker.addClass('');
}

ButtShakingDancer.prototype = new BlinkyDancer();
SnowManDancer.prototype = new BlinkyDancer();
