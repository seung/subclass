var FadedInDancer = function (left, top) {
	BlinkyDancer.call(this, left, top);
	var randomColorGenerator = ["#C12267","#D2B9D3","#78c7c7","#A0CFEC","#AFC7C7","#54C571","#FDD017","#F87217","#E799A3"];
	this.moneyMaker.addClass("fadedindancer").css({"border-color" : randomColorGenerator[Math.floor(Math.random()*9)]});
	this.blink = function(){
		this.moneyMaker.fadeIn(1500).delay(1500).fadeOut(1500);
	};
}

FadedInDancer.prototype = new BlinkyDancer();