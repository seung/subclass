var PCareBear = function(left, top) {
	Dancer.apply(this, [left, top]);

  this.moneyMaker.addClass('pBear');
};

PCareBear.prototype = new Dancer();