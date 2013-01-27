var makeSmilingDancer = function(left, top) {
  var smilingDancer = makeBlinkyDancer(left,top);
  smilingDancer.$moneyMaker = $("<span class='smiling_dancer'></span>");

  return smilingDancer;
};