var makeColorDancer = function(left, top){
  var colorDancer = makeBlinkyDancer(left, top);

  //colorDancer.moneyMaker.css("{border: 40px solid goldenrod}");
  colorDancer.moneyMaker.addClass("colorDancer");
  return colorDancer;
}
