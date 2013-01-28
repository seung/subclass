var makeSquareDancer = function (top, left){
  var squareDancer = new Dancer();
  squareDancer.top = top;
  squareDancer.left = left;
  squareDancer.frequency = Math.random() * 2000;
  squareDancer.$moneyMaker = $('<span class="square"></span>');

  squareDancer.blink = function() {
    squareDancer.$moneyMaker.toggle(function(){
      $(this).animate({
        height: '+=1%',
        width: '5%',
        left: '+=275px'
      }, 500);
    });
  };
  squareDancer.getInPosition();
  return squareDancer;
};