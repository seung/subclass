var makePoleDancer = function(left, top) {
	var poleDancer = makeBlinkyDancer(left, top);

	poleDancer.moneyMaker.css({"height": "30px", "border": "3px solid green"});

	return poleDancer;
};

var makeColoredDancer = function(left, top) {
	var coloredDancer = makeBlinkyDancer(left, top);
	var randomR = Math.floor(Math.random()*255);
	var randomG = Math.floor(Math.random()*255);
	var randomB = Math.floor(Math.random()*255);
	coloredDancer.moneyMaker.css({"border-color": "rgb("+randomR+","+randomG+","+randomB+")"});

	return coloredDancer;
};

