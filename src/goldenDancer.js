var goldenDancer = function(left, top) {
	var goldenDancer = makeBlinkyDancer(left, top);
	goldenDancer.blink = function() {
		goldenDancer.moneyMaker.fadeToggle()
	};
	goldenDancer.frequency = Math.random() * 5000;
	goldenDancer.moneyMaker.addClass('moonwalk');
	goldenDancer.moneyMaker.css({border: "10px solid goldenrod"});
	return goldenDancer;
};