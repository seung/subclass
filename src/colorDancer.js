var ColorDancer = function(left, top) {
	BlinkyDancer.call(this, left, top);
	var randomColorGenerator = ["blue","green","yellow","orange","brown"];
	this.moneyMaker.css({"border-color" : randomColorGenerator[Math.floor(Math.random()*5)]});
};	

ColorDancer.prototype = new BlinkyDancer();