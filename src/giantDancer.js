var makeGiantDancer = function(left, top){

  var giantDancer = makeBlinkyDancer(left, top);
  giantDancer.$moneyMaker = $("<span class='giant_dancer'></span>");
  giantDancer.frequency = Math.random() * 10000;

  return giantDancer;
};