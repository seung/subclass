var spriteCircle = function(left, top) {
	Sprite.apply(this, [left, top]);
};

spriteCircle.prototype = new Sprite();


// var GoldenDancer = function(left, top) {
// 	Sprite.apply(this, [left, top]);
// 	var self = this;
// 	this.blink = function() {
//       self.node.fadeToggle()
// 	};
// 	this.frequency = 1000;
// 	this.node.addClass('moonwalk');
// 	this.node.css({border: "10px solid goldenrod"});	
// };

// GoldenDancer.prototype = new Sprite();