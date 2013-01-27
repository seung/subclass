var makeSpinnyDancer = function(left, top){

  var dancer = makeBlinkyDancer(left,top);
  dancer.$moneyMaker = $('<span class="spinnydancer"></span>');
  dancer.dance = function(){
      this.$moneyMaker.appendTo('.stage');
  }
  dancer.getInPosition();

  return dancer;
};
