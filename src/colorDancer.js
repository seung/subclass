var ColorDancer = function(left, top){
  BlinkyDancer.apply(this, [left, top]);

  //colorDancer.moneyMaker.css("{border: 40px solid goldenrod}");
  this.moneyMaker.addClass("colorDancer");

  /* this.blink = function(){
  	this.moneyMaker.css("border-color", _randomColor())
  	this.moneyMaker.toggle();
  	}*/
};

ColorDancer.prototype = new BlinkyDancer();
ColorDancer.prototype.constructor = ColorDancer;

ColorDancer.prototype.blink = function(){
  this.moneyMaker.css("border-color", _randomColor())
  this.moneyMaker.toggle();
};

var _randomColor = function(){

	var _random = function(){
		return Math.floor(Math.random() * 255)
	};
	var newRGB =  "rgb("+_random()+","+_random()+ ","+_random()+")";
	return newRGB;
};