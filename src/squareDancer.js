var makeSquareDancer = function (top, left){
  var squareDancer = makeBlinkyDancer(top, left);

  squareDancer.$moneyMaker.addClass('square');

  return squareDancer;

};