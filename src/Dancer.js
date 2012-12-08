var Dancer = function(left, top){
    // we'll use top and left to set the position of this dancer
    this.top = top;
    this.left = left;
    var self = this;
    // used in setInterval below
    this.frequency = Math.random() * 2000;

    // get dressed...
    this.moneyMaker = $("<span class='dancer'></span>");

    this.dance = function(){
      // go out...
      this.moneyMaker.appendTo(".stage");
      // ...and do those sexy moves
     
      setInterval( function(){self.step()}, this.frequency);
    };

    this.step = function(){
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
      self.moneyMaker.toggle();
    }

  this.getInPosition(); 
};


