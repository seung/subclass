var ColorDancer = function(left, top){

  this.top = top;
  this.left = left;
  this.frequency = Math.random() * 2000;
  this.$moneyMaker = $('<span class="random"></span>');
  this.getInPosition();
};

ColorDancer.prototype = Object.create(Dancer.prototype);

ColorDancer.prototype.step = function(){
  this.getInPosition();
  this.changeColor();
},
ColorDancer.prototype.changeColor = function(){
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