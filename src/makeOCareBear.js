var OCareBear = function(left, top) {
	Dancer.apply(this, [left, top]);

  this.moneyMaker.addClass('oBear');
};

OCareBear.prototype = new Dancer();