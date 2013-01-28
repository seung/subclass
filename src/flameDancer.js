var makeFlameDancer = function (top, left){
  var flameDancer = new Dancer();
  flameDancer.top = top;
  flameDancer.left = left;
  flameDancer.frequency = Math.random() * 2000;
  flameDancer.$moneyMaker = $('<span class="burn"></span>');
  console.log("burn left position " + flameDancer.left);

  $('div.flame').burn();

  flameDancer.blink = function() {
    flameDancer.$moneyMaker.toggle(function(){
      $(this).text('BURN!').burn();
    });
  };
  flameDancer.getInPosition();
  return flameDancer;

};