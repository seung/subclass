var ColorDancer = function(left, top){
  
  this.left = left;
  this.top = top;

  //colorDancer.moneyMaker.css("{border: 40px solid goldenrod}");
  this.moneyMaker.addClass("colorDancer");

  this.blink = function(){
  	this.moneyMaker.css("border-color", _randomColor())
  	this.moneyMaker.toggle();
  	}
};

ColorDancer.prototype = new BlinkyDancer();

var _randomColor = function(){

	var _random = function(){
		return Math.floor(Math.random() * 255)
	};
	var newRGB =  "rgb("+_random()+","+_random()+ ","+_random()+")";
	return newRGB;
};