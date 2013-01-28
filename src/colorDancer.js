var ColorDancer = function(left, top){

  this.$moneyMaker = $('<span class="random"></span>');
};

ColorDancer.prototype = Object.create(Dancer.prototype);

this.step = function(){
  this.getInPosition();
  this.changeColor();
},
this.changeColor = function(){
  var w = Math.floor(Math.random() * 100);
  var x = Math.floor(Math.random() * 255);
  var y = Math.floor(Math.random() * 255);
  var z = Math.floor(Math.random() * 255);
  var styleColor = {
    'border':  w.toString() + 'px solid rgb(' + x.toString() + ',' + y.toString() + ',' + z.toString() + ')',
    'border-radius': w.toString() + 'px'
  };
  this.$moneyMaker.css(styleColor);
};