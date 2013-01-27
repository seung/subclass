var makeSquareDancer = function (top, left){
  var squareDancer = Object.create(globalDancer);
  squareDancer.top = top;
  squareDancer.left = left;
  squareDancer.$moneyMaker.addClass('square');

  squareDancer.blink = function() {
    squareDancer.$moneyMaker.toggle(function(){
      $(this).animate({
        height: '25%',
        width: '1%'
      });
    });
  };
  squareDancer.getInPosition();
  return squareDancer;
};