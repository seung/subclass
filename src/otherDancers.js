var makePoleDancer = function(left, top) {
	var poleDancer = makeBlinkyDancer(left, top);
	poleDancer.height = "30px";
	poleDancer.moneyMaker.css({"height": poleDancer.height, "border": "3px solid green"});

	return poleDancer;
};

var makeColoredDancer = function(left, top) {
	var coloredDancer = makeBlinkyDancer(left, top);
	coloredDancer.randomR = Math.floor(Math.random()*255);
	coloredDancer.randomG = Math.floor(Math.random()*255);
	coloredDancer.randomB = Math.floor(Math.random()*255);
	coloredDancer.moneyMaker.css({"border-color": "rgb("+coloredDancer.randomR+","+coloredDancer.randomG+","+coloredDancer.randomB+")"});

	return coloredDancer;
};

