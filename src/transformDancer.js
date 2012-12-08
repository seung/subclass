var TransformDancer = function(left, top) {
  //colorDancer.moneyMaker.css("{border: 40px solid goldenrod}");
  BlinkyDancer.apply(this, [left, top]);

  this.moneyMaker.addClass("transFormDancer");

  this.blink = function(){
  	this.moneyMaker.css("transform", _randomTransform());
    this.moneyMaker.toggle();
  }
};

TransformDancer.prototype = new BlinkyDancer();
TransformDancer.prototype.constructor = TransformDancer;

var _random = function(){
    var num = Math.random() * .5;
    //console.log (num);
    return num;
  }

var _randomTransform = function(){
  
	var newScale =  "scale("+_random()+", "+_random()+")";
	return newScale;
}

