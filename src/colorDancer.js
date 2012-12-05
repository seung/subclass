var makeColorDancer = function(left, top){
  var colorDancer = makeBlinkyDancer(left, top);
  //colorDancer.moneyMaker.css("{border: 40px solid goldenrod}");
  colorDancer.moneyMaker.addClass("colorDancer");

  colorDancer.blink = function(){

  	colorDancer.moneyMaker.css("border-color", _randomColor())
  	colorDancer.moneyMaker.toggle();
  	}
  var _randomColor = function(){

  	var _random = function(){
  		return Math.floor(Math.random() * 255)
  	}
  	var newRGB =  "rgb("+_random()+","+_random()+ ","+_random()+")";
  	return newRGB;
  }

  return colorDancer;
}
