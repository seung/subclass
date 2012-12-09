var MoshPitDancer = function(left, top) {
  Dancer.apply(this, [left, top]);
  var self = this;
  this.moshPit = $('#moshPit');
  this.frequency = 500 ;
  // this.getInPosition();
  this.moshPitPos = 200;
  this.dance = function(){
    self.moneyMaker.appendTo("#moshPit");
    setInterval(self.step, self.frequency);
  },
  this.step = function(){
    self.danceMove();
  },
  this.danceMove = function(){
    var newMoshTop = this.randomPos(this.moshPitPos, 1000, 200);
    var newMoshLeft = this.randomPos(this.moshPitPos, 2000, 1000);
    var newTop = this.randomPos(this.moshPitPos, 100, 100);
    var newLeft = this.randomPos(this.moshPitPos, 100, 100);
    this.moshPit.animate({top: newMoshTop, left: newMoshLeft});
    this.moneyMaker.animate({top: newTop, left: newLeft});
  };
  
  this.randomPos = function(original, max, maxChange){
     return original%max+Math.random()*maxChange;
  };
};

MoshPitDancer.prototype = Object.create(Dancer.prototype);