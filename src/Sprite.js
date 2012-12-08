var Sprite = function(left, top){

    this.top = top;
    this.left = left;

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
  
    this.getInPosition();
};
