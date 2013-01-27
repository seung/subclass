var makeSquareDancer = function (top, left){
  var squareDancer = makeBlinkyDancer(top, left);

  squareDancer.$moneyMaker.addClass('square');


  squareDancer.blink = function() {

    // squareDancer.$moneyMaker.fadeToggle('slow');
    // squareDancer.$moneyMaker.css('-webkit-transform: rotate(135deg)');

    squareDancer.$moneyMaker.toggle(function(){
      $(this).animate({
      height: '25%'
      // -webkit-transform: rotate(135deg),
      // transform: rotate(135deg)
    });
    });
  };

  return squareDancer;

};