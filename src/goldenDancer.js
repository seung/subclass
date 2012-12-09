var GoldenDancer = function(left, top) {
	Dancer.apply(this, [left, top]);
	this.frequency = 1000;
	this.cssSetup();
};

GoldenDancer.prototype = new Dancer();

GoldenDancer.prototype.blink = function() {
	this.moneyMaker.fadeToggle()
};

GoldenDancer.prototype.cssSetup = function() {
	this.moneyMaker.addClass('moonwalk');
	this.moneyMaker.css({border: "10px solid goldenrod"});	
};