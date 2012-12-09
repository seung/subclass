var PCareBear = function(left, top) {
	Dancer.apply(this, [left, top]);

  this.moneyMaker.addClass('pBear');
};

PCareBear.prototype = Object.create(Dancer.prototype);
PCareBear.prototype.constructor = PCareBear;