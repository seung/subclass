var dancersLength = window.dancers.length;

var selectRandomDancer = function(){
  var num = Math.round(Math.random() * (dancersLength - 1));
  return window.dancers[num];
};

var addZRotation = function() {
  var aDancer = selectRandomDancer();
  aDancer.blink = function(){
  	aDancer.moneyMaker.css("transform", rotate(20deg));
  }
  
};





