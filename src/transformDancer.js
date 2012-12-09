var TransformDancer = function(left, top) {
  //colorDancer.moneyMaker.css("{border: 40px solid goldenrod}");
  BlinkyDancer.apply(this, [left, top]);

  this.moneyMaker.addClass("transFormDancer");

};

TransformDancer.prototype = Object.create(BlinkyDancer.prototype);// creates a new object based upon BlinkyDancer.prototype into TransformDancer.prototype
TransformDancer.prototype.constructor = TransformDancer;

TransformDancer.prototype.blink = function(){
  this.moneyMaker.css("transform", _randomTransform());
  this.moneyMaker.toggle();
};

var _random = function(){
    var num = Math.random() * .5;
    //console.log (num);
    return num;
  }

var _randomTransform = function(){
  
	var newScale =  "scale("+_random()+", "+_random()+")";
	return newScale;
}

