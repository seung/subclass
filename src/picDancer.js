var makePicDancer = function (left, top) {
	var picDancer = makeBlinkyDancer(left, top);
	var randomClassGenerator = ['monster','ballet','champagne','monkey','mime','discoball'];
	picDancer.moneyMaker.addClass(randomClassGenerator[Math.floor(Math.random()*6)]);
	return picDancer;
}