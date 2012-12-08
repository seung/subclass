var TransformDancer = function(left, top){

  Dancer.apply(this, [left, top]);

  this.moneyMaker.addClass("transFormDancer");

  this.blink = function(){
  	this.moneyMaker.css("transform", _randomTransform());
    this.moneyMaker.toggle();
  	};

  var _random = function(){
      var num = Math.random() * .5;
      return num;
    };

  var _randomTransform = function(){
  	var newScale =  "scale("+_random()+", "+_random()+")";
  	return newScale;
  };

};

TransformDancer.prototype = new Dancer();
