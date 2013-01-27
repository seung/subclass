var makeSquareDancer = function(left, top) {
  var squareDancer = makeBlinkyDancer(left, top);
  // squareDancer.left = 100;
  // squareDancer.right = 50;
  squareDancer.$moneyMaker = $("<span class='square_dancer'></span>");

  // function dance() {
  //   squareDancer.$moneyMaker.appendTo('.stage');
  // }
  return squareDancer;

};