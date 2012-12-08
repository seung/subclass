var Dancer = function(left, top){
    // we'll use top and left to set the position of this dancer

    this.top = top;
    this.left = left;

    // get dressed...
    this.moneyMaker = $("<span class='dancer'></span>");

    this.dance = function(){
      // go out...
      this.moneyMaker.appendTo(".stage");
    };

    this.step = function(){
      this.getInPosition();
    };

    this.getInPosition = function(){
      var styleObj = {
        top: this.top,
        left: this.left
      };
      this.moneyMaker.css(styleObj);
    };
  
  this.getInPosition();

};