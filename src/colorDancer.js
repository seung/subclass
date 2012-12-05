var makeColorDancer = function(left, top) {
	var colorDancer = makeBlinkyDancer(left, top);
	var randomColorGenerator = ["blue","green","yellow","orange","brown"]
	colorDancer.moneyMaker.css({"border-color" : randomColorGenerator[Math.floor(Math.random()*5)]});
	return colorDancer;
};

	