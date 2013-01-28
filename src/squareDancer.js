var makeSquareDancer = function (top, left){
  var squareDancer = new Dancer();
  squareDancer.top = top;
  squareDancer.left = left;
  squareDancer.frequency = Math.random() * 2000;
  squareDancer.$moneyMaker = $('<span class="square"></span>');
  console.log("square left position " + squareDancer.left);

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