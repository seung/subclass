var makeFlameDancer = function (top, left){
  var flameDancer = makeBlinkyDancer(top, left);

  flameDancer.$moneyMaker.addClass('burn');
  $('body').burn();

  flameDancer.blink = function() {

    // flameDancer.$moneyMaker.fadeToggle('slow');
    // flameDancer.$moneyMaker.css('-webkit-transform: rotate(135deg)');

    flameDancer.$moneyMaker.toggle(function(){
      $(this).text('BURN!').burn();
    });
  };

  return flameDancer;

};