var makeTransformDancer = function(left, top){
  var transformDancer = makeBlinkyDancer(left, top);
  //colorDancer.moneyMaker.css("{border: 40px solid goldenrod}");
  transformDancer.moneyMaker.addClass("transFormDancer");

  transformDancer.blink = function(){

  	transformDancer.moneyMaker.css("transform", _randomTransform());
    transformDancer.moneyMaker.toggle();
  	}

  var _random = function(){
      var num = Math.random() * .5;
      //console.log (num);
      return num;
    }

  var _randomTransform = function(){
    
  	var newScale =  "scale("+_random()+", "+_random()+")";
  	return newScale;
  }
  return transformDancer;


}
