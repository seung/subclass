var makeBlinkyDancer = function(left, top){

  var newBlinky = new DancerPrototype(left,top);

  newBlinky.frequency = Math.random() * 5000;

  newBlinky.dance = function() {
    setInterval(newBlinky.blink, newBlinky.frequency);
  };

  newBlinky.blink = function(){
      newBlinky.$moneyMaker.toggle();
    };

  return newBlinky;

};

var makeRedBlinky = function(left, top){

  var redBlinky = makeBlinkyDancer(left, top);
  redBlinky.$moneyMaker = $('<span class="redBlinkyDancer"></span>');
  redBlinky.getInPosition();

  return redBlinky;

};

var makeDonutBlinky = function(left, top){

  var donutBlinky = makeBlinkyDancer(left, top);
  donutBlinky.$moneyMaker = $('<span class="donutBlinkyDancer"></span>');
  donutBlinky.$moneyMaker.css('border-color', "rgb(" + Math.floor(Math.random() *256) + ','  + Math.floor(Math.random() *256) + ',' + Math.floor(Math.random() *256) + ')');
  donutBlinky.getInPosition();

  return donutBlinky;

};


