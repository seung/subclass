var makeFlameDancer = function (top, left){
  flame = function() {
    flameDancer.$moneyMaker.toggle(function(){
      $(this).text('BURN!').burn();
    });
  };

  var flameDancer = new GlobalDancerConstructor(top, left, flame);
  flameDancer.$moneyMaker.addClass('burn');

  $('div.flame').burn();

  return flameDancer;
};