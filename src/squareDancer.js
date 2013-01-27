var makeSquareDancer = function(left, top) {
  var squareDancer = makeBlinkyDancer(left, top);

  squareDancer.$moneyMaker = $("<span class='square_dancer'></span>");

  return squareDancer;

};