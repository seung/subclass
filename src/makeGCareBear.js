var GCareBear = function(left, top) {
  Dancer.apply(this, [left, top]);

  this.moneyMaker.addClass('gBear');
};

GCareBear.prototype = new Dancer();