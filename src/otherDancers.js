var makeButtShakingDancer = function(left, top) {
	
	var ButtShakingDancer = makeBlinkyDancer(left,top);
	ButtShakingDancer.moneyMaker.addClass('dancing-butt');

	return ButtShakingDancer;
}

var makeSnowManDancer = function(left, top) {
	
	var SnowManDancer = makeBlinkyDancer(left,top);
	SnowManDancer.moneyMaker.addClass('snow-man');

	return SnowManDancer;
}

