var makeSquareDancer = function (top, left){

  rotate = function() {
    squareDancer.$moneyMaker.toggle(function(){
      $(this).animate({
        height: '+=1%',
        width: '5%',
        left: '+=275px'
      }, 500);
    });
  };

  var squareDancer = new GlobalDancerConstructor(top, left, rotate);
  squareDancer.$moneyMaker.addClass('square');
  return squareDancer;
};