var spriteCircle = function(left, top) {
	Sprite.apply(this, [left, top]);
};

spriteCircle.prototype = new Sprite();


// var GoldenDancer = function(left, top) {
// 	Sprite.apply(this, [left, top]);
// 	var self = this;
// 	this.blink = function() {
//       self.moneyMaker.fadeToggle()
// 	};
// 	this.frequency = 1000;
// 	this.moneyMaker.addClass('moonwalk');
// 	this.moneyMaker.css({border: "10px solid goldenrod"});	
// };

// GoldenDancer.prototype = new Sprite();