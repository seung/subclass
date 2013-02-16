var makeChangingDancer = function(left, top) {

  var changer = new DancerPrototype(left, top);

  changer.$moneyMaker = $('<span class="changingDancer"></span>');

  changer.dance = function(){
    var size = Math.random()*300;
    $('.changingDancer').animate({
      backgroundColor: "rgb(" + Math.floor(Math.random() *256) + ','  + Math.floor(Math.random() *256) + ',' + Math.floor(Math.random() *256) + ')' ,
      'border-radius': size+'px',
      height:size+'px',
      width:size+'px'
      }, Math.random() * 6000, function() {
        changer.dance();
    });
  };

  changer.lineUp = function(){
    changer.$moneyMaker.css('left', '20px');
  };

  changer.getInPosition();

  return changer;

};