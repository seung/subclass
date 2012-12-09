var FadedInDancer = function(left, top) {
	BlinkyDancer.call(this, left, top);
	this.changeStyle();
};	
FadedInDancer.prototype = Object.create(BlinkyDancer.prototype);
FadedInDancer.prototype.constructor = FadedInDancer;
FadedInDancer.prototype.blink = function(){
	this.moneyMaker.fadeIn(1500).delay(1500).fadeOut(1500);
};
FadedInDancer.prototype.changeStyle = function(){
	this.moneyMaker.addClass("fadedindancer");
	this.moneyMaker.css({"border-color" : randomColorGenerator[Math.floor(Math.random()*9)]});
};

var randomColorGenerator = ["#C12267","#D2B9D3","#78c7c7","#A0CFEC","#AFC7C7","#54C571","#FDD017","#F87217","#E799A3"]