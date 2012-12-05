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

//mixin to change a random dancer's color
var changeDancerColor = function(dancer) {
	var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ','
                     + (Math.floor((256-199)*Math.random()) + 200) + ','
                     + (Math.floor((256-199)*Math.random()) + 200) + ')';
	dancer.moneyMaker.css('border-color', hue);
}