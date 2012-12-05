// todo Comeback and fix the bug

var makeFadedInDancer = function (left, top) {
	var fadedInDancer = makeBlinkyDancer(left, top);
	fadedInDancer.moneyMaker.fadeIn('slow');
	return fadedInDancer;
}