var ColorDancer = function(left, top){
  Dancer.apply(this, [left, top]);
  this.moneyMaker.addClass("colorDancer");
  this.blink = function(){
  	this.moneyMaker.css("border-color", this._randomColor())
  	this.moneyMaker.toggle();
  	};
  this._randomColor = function(){
  	var _random = function(){
  		return Math.floor(Math.random() * 255)
  	};
  	var newRGB =  "rgb("+_random()+","+_random()+ ","+_random()+")";
  	return newRGB;
  };
};
ColorDancer.prototype = new Dancer();
