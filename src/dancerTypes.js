var BlinkyDancer = function(left, top){
      // we'll use top and left to set the position of this dancer
    this.top = top;
    this.left = left;

    // used in setInterval below
    this.frequency= Math.random() * 2000;

    // get dressed...
    this.moneyMaker = $("<span class='dancer'></span>");

    this.dance = function(){
      // go out...
      this.moneyMaker.appendTo(".stage");
      // ...and do those sexy moves
      setInterval(this.step, this.frequency);
    };
    var self = this;
    this.step = function(){
      self.getInPosition();
      self.danceMove();
    };

    this.getInPosition = function(){
      var styleObj = {
        top: this.top,
        left: this.left
      };
      this.moneyMaker.css(styleObj);
    };

    this.danceMove = function(){
      this.moneyMaker.toggle();
    };
  this.getInPosition();

  }; // dancer
  



var makeRaveDancer = function(left, top) {
  var raveDancer = new BlinkyDancer(left, top);
  raveDancer.frequency = 70 ;
  raveDancer.raveColors = ['rgb(255, 0, 204)','rgb(247, 255, 0)','rgb(94, 255, 0)','rgb(0, 255, 242)'];
  raveDancer.danceMove = function(){
    var randomColorGen = function() {
      return raveDancer.raveColors[Math.floor(Math.random() * raveDancer.raveColors.length)];
    };

    var randomColor = randomColorGen(); 
    raveDancer.moneyMaker.css("border-color", randomColor);
  };
  return raveDancer;
};