var backAndForther = function(left, top) {
	var backAndForther = makeBlinkyDancer(left, top);
	backAndForther.blink = function() {
		backAndForther.moneyMaker.fadeToggle()
	};
	backAndForther.frequency = Math.random() * 2000;
	backAndForther.moneyMaker.addClass('backAndForther');
	backAndForther.moneyMaker.css(backAndForther.getInPosition(styleObj));
	return backAndForther;
};