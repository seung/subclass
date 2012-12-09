var ColorDancer = function(left,top){
	BlinkyDancer.call(this, left, top);
	this.changeCss();
};
ColorDancer.prototype = Object.create(BlinkyDancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;
ColorDancer.prototype.changeCss = function() {
	this.moneyMaker.css({"border-color" : randomColorGenerator[Math.floor(Math.random()*5)]});
};
var randomColorGenerator = ["blue","green","yellow","orange","brown"];
	