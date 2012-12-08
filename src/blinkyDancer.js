var BlinkyDancer = function(left, top) {
	//BlinkyDancer.prototype = new Dancer(left, top);
	//return new Dancer(left, top);
	this.left = left;
    this.top = top;
};

BlinkyDancer.prototype = new Dancer();