var OCareBear = function(left, top) {
	Dancer.apply(this, [left, top]);

  this.moneyMaker.addClass('oBear');
};

OCareBear.prototype = Object.create(Dancer.prototype);
OCareBear.prototype.constructor = OCareBear;