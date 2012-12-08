var PoleDancer = function(left, top) {
	this.height = "30px";
	this.moneyMaker.css({"height": this.height, "border": "3px solid green"});
};

PoleDancer.prototype = new BlinkyDancer();

var ColoredDancer = function(left, top) {
	this.randomR = Math.floor(Math.random()*255);
	this.randomG = Math.floor(Math.random()*255);
	this.randomB = Math.floor(Math.random()*255);
	this.moneyMaker.css({"border-color": "rgb("+this.randomR+","+this.randomG+","+this.randomB+")"});
};

ColoredDancer.prototype = new BlinkyDancer();

