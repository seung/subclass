

var MoshPitDancer = function(left, top) {
  this.moshPit = $('#moshPit');
  this.frequency = 500 ;
  this.getInPosition();
  this.moshPitPos = 200;
  this.left = left;
  this.top = top;
      this.moneyMaker = $("<span class='dancer'></span>")

  };
  

  MoshPitDancer.prototype = new BlinkyDancer();

  MoshPitDancer.prototype.randomPos = function(original, max, maxChange){
     return original%max+Math.random()*maxChange;
  };


  MoshPitDancer.prototype.dance = function(){
    this.moneyMaker.appendTo("#moshPit");
    setInterval(this.step.bind(this), this.frequency);
  },
  MoshPitDancer.prototype.step = function(){
    this.danceMove();
  },
  MoshPitDancer.prototype.danceMove = function(){
    var newMoshTop = this.randomPos(this.moshPitPos, 1000, 200);
    var newMoshLeft = this.randomPos(this.moshPitPos, 2000, 1000);
    var newTop = this.randomPos(this.moshPitPos, 100, 100);
    var newLeft = this.randomPos(this.moshPitPos, 100, 100);
    this.moshPit.animate({top: newMoshTop, left: newMoshLeft});
    this.moneyMaker.animate({top: newTop, left: newLeft});
  };
