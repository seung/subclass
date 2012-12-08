var BlinkyDancer = function(left, top){
    // we'll use top and left to set the position of this dancer
    this.top = top,
    this.left =  left,

    // used in setInterval below
    this.frequency = Math.random() * 2000,

    // get dressed...
    this.moneyMaker = $("<span class='dancer'></span>")
   // dancer

};
   
    BlinkyDancer.prototype.getInPosition = function(){
      var styleObj = {
        top: this.top,
        left: this.left
      };
      this.moneyMaker.css(styleObj);
    };

    BlinkyDancer.prototype.danceMove = function(){
      console.log(12312)
      this.moneyMaker.toggle();
    };

    BlinkyDancer.prototype.step = function () {
         console.log('sted')
      this.getInPosition(this);
      this.danceMove();
    };
     BlinkyDancer.prototype.dance = function(){
         console.log('dance')
    // go out...
    this.moneyMaker.appendTo(".stage");
    // ...and do those sexy moves
    var self = this;
    setInterval(function () { self.step() }, this.frequency);
    }
   
var RaveDancer = function (left, top) {
    this.top = top;
    this.left =  left;
    this.frequency = 70 ;
    this.raveColors = ['rgb(255, 0, 204)','rgb(247, 255, 0)','rgb(94, 255, 0)','rgb(0, 255, 242)'];
 this.moneyMaker = $("<span class='dancer'></span>")

}
  RaveDancer.prototype = new BlinkyDancer();
  RaveDancer.prototype.danceMove = function(){
    var randomColor = this.raveColors[Math.floor(Math.random() * this.raveColors.length)];
    this.moneyMaker.css("border-color", randomColor);
  }; 

  BlinkyDancer.prototype.dance = function(){
    // go out...
    this.moneyMaker.appendTo(".stage");
    // ...and do those sexy moves
    var self = this;
    setInterval(function () { self.danceMove() }, this.frequency);
    }