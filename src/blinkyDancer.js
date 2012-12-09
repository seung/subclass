var BlinkyDancer = function(left, top){
    // we'll use top and left to set the position of this dancer
    this.top =  Math.floor(top);
    this.left =  Math.floor(left);

    // used in setInterval below
    this.frequency =  Math.random() * 2000;

    // get dressed...
    this.moneyMaker =  $("<span class='dancer'></span>");

    this.dance =  function(){
      // go out...
      var self = this;
      this.moneyMaker.appendTo(".stage");
      // ...and do those sexy moves
      setInterval(function(){
        self.step(); 
      }, this.frequency);
    };

    this.getInPosition =  function(){
      var styleObj = {
        top:  this.top,
        left:  this.left
      };
      this.moneyMaker.css(styleObj);
    };

  this.getInPosition();
};

BlinkyDancer.prototype.step =  function(){
  this.getInPosition();
  this.blink();
};

BlinkyDancer.prototype.blink =  function(){
  this.moneyMaker.toggle();
};