var TriangleDancer = function(left,top) {
	BlinkyDancer.call(this, left, top);
	var randomColorGenerator = ["#C12267","#D2B9D3","#78c7c7","#A0CFEC","#AFC7C7","#54C571","#FDD017","#F87217","#E799A3"];
  this.moneyMaker.addClass("triangle").css({"border-top-color" : randomColorGenerator[Math.floor(Math.random()*9)]});
};

TriangleDancer.prototype = new BlinkyDancer();
TriangleDancer.prototype.constructor = TriangleDancer;