var makeFadedInDancer = function (left, top) {
	var fadedInDancer = makeBlinkyDancer(left, top);
	fadedInDancer.moneyMaker.addClass("fadedindancer");
	fadedInDancer.blink = function(){
		fadedInDancer.moneyMaker.fadeIn(1500).delay(1500).fadeOut(1500);
	};
	return fadedInDancer;
}