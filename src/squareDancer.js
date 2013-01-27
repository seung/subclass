var makeSquareDancer = function (top, left){
  var squareDancer = makeBlinkyDancer(top, left);

  squareDancer.$moneyMaker.addClass('square');


  squareDancer.blink = function() {

    // squareDancer.$moneyMaker.fadeToggle('slow');
    // squareDancer.$moneyMaker.css('-webkit-transform: rotate(135deg)');

    squareDancer.$moneyMaker.toggle(function(){
      $(this).animate({
      height: '25%',
      '-webkit-transform': 'rotate(135deg)',
      '-moz-transform': 'rotate(135deg)',
      '-ms-transform': 'rotate(135deg)',
      '-o-transform': 'rotate(135deg)',
      'transform': 'rotate(135deg)',
      width: '1%'
    });
    });
  };

  return squareDancer;

};