var makeFadedInDancer = function (left, top) {
	var fadedInDancer = makeBlinkyDancer(left, top);
	fadedInDancer.moneyMaker.addClass("fadedindancer");
	var randomColorGenerator = ["#C12267","#D2B9D3","#78c7c7","#A0CFEC","#AFC7C7","#54C571","#FDD017","#F87217","#E799A3"]
	fadedInDancer.moneyMaker.css({"border-color" : randomColorGenerator[Math.floor(Math.random()*9)]});
	fadedInDancer.blink = function(){
		fadedInDancer.moneyMaker.fadeIn(1500).delay(1500).fadeOut(1500);
	};
	return fadedInDancer;
}