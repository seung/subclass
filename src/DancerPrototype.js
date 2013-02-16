var DancerPrototype = function(left, top){
  this.left = left;
  this.top = top;
};

DancerPrototype.prototype.startDancing = function() {
  this.$moneyMaker.appendTo('.stage');
  this.dance();
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
