var RaveDancer = function(left, top) {
  Dancer.apply(this, [left, top]);
  var self = this;
  this.frequency = 70;
  this.raveColors = ['rgb(255, 0, 204)','rgb(247, 255, 0)','rgb(94, 255, 0)','rgb(0, 255, 242)'];
  this.danceMove = function(){
    var randomColorGen = function() {
      return self.raveColors[Math.floor(Math.random() * self.raveColors.length)];
    };
    var randomColor = randomColorGen(); 
    this.moneyMaker.css("border-color", randomColor);
  };
};

RaveDancer.prototype = Object.create(Dancer.prototype);