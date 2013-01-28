var changingDancer = function(left, top) {
  var changer = new DancerPrototype(left, top);
  changer.$moneyMaker = $('<span class="changingDancer"></span>');
  frequency = Math.random() * 1000;

  changer.lineUp = function(){
    changer.$moneyMaker.css('left', '20px');
  }

  changer.step = function(){
    var changeColour = function(){
      
      var size = Math.random()*300;
      $('.changingDancer').animate({
        backgroundColor: "rgb(" + Math.floor(Math.random() *256) + ','  + Math.floor(Math.random() *256) + ',' + Math.floor(Math.random() *256) + ')' ,
        'border-radius': size+'px',
        height:size+'px',
        width:size+'px'
        }, Math.random() * 6000, function() {
          changeColour();
      });
    };
    changeColour();
  };

  changer.getInPosition();
  return changer;
};