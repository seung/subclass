var makeGiantDancer = function(left, top){

  var giantDancer = makeBlinkyDancer(left, top);

  giantDancer.$moneyMaker = $("<span class='giant_dancer'></span>");


  return giantDancer;
};