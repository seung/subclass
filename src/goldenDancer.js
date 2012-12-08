var GoldenDancer = function(left, top) {
	this.left =left;
	this.top = top;
	self = this;
	this.blink = function() {
		self.moneyMaker.fadeToggle()
	};
	this.frequency = 1000;
	this.moneyMaker.addClass('moonwalk');
	this.moneyMaker.css({border: "10px solid goldenrod"});	
};
  
   GoldenDancer.prototype = new Dancer();