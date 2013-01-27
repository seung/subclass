var makeFlameDancer = function (top, left){
  var flameDancer = makeBlinkyDancer(top, left);

  flameDancer.$moneyMaker.addClass('burn');
  $('div.flame').burn();

  flameDancer.blink = function() {
    flameDancer.$moneyMaker.toggle(function(){
      $(this).text('BURN!').burn();
    });
  };

  return flameDancer;

};