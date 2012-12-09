var ColorDancer = function(left, top){
  Dancer.apply(this, [left, top]);
  this.moneyMaker.addClass("colorDancer");
  this.blink = function(){
  	this.moneyMaker.css("border-color", _randomColor())
  	this.moneyMaker.toggle();
  	};
};
ColorDancer.prototype = new Dancer();
