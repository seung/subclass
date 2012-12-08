var Dancer = function(){
    // we'll use top and left to set the position of this this
    //this.top = 0;
    //this.left = 0;
    var self = this;

    // used in setInterval below
    this.frequency = Math.random() * 2000;

    // get dressed...
    this.moneyMaker = $("<span class='blinkyDancer'></span>");

    this.dance = function(){
      // go out...
      this.moneyMaker.appendTo(".stage");
      // ...and do those sexy moves
      setInterval(function(){self.step();}, this.frequency);
    };

    this.step = function(){
    // self = this;
      self.getInPosition();
      self.blink();
    };

    this.getInPosition = function(){
      var styleObj = {
        top: self.top,
        left: self.left
      };
      this.moneyMaker.css(styleObj);
    };

    this.blink = function(){
      // self = this;
      self.moneyMaker.toggle();
    }
  
    //this.getInPosition();
};
