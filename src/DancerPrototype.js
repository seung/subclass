var DancerPrototype = function(left, top){
  this.frequency = function(){return Math.random() * 2000;};
  this.left = left;
  this.top = top;
};

DancerPrototype.prototype.dance = function() {
  this.$moneyMaker.appendTo('.stage');
  var that = this;
  setInterval(that.step, that.frequency());
};

DancerPrototype.prototype.getInPosition = function () {
  var styleObj = {
    top: this.top,
    left: this.left
  };
  this.$moneyMaker.css(styleObj);
};

DancerPrototype.prototype.lineUp = function(){
  this.$moneyMaker.animate({
    left: 20
  }, 6000);
};
