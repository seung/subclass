var Sprite = function(left, top){

    this.top = top;
    this.left = left;

    // used in setInterval below
    this.frequency = Math.random() * 2500;
    // get dressed...
    this.moneyMaker = $("<span class='blinkyDancer'></span>");

    this.setStyles();
};

Sprite.prototype = {
  dance: function(){
    // go out...
    this.moneyMaker.appendTo(".stage");
    // ...and do those sexy moves
    setInterval(function(){this.step();}, this.frequency);
  },
  step: function(){
    this.width = this.moneyMaker.width();

    this.top = Math.random() * 900;
    this.left = Math.random() * 900;
    this.setStyles();

    this.blink();
  },
  setStyles: function(){
    var styleObj = {
      width: this.width,
      top: this.top,
      left: this.left
    };
    this.moneyMaker.css(styleObj);
  },
  blink: function(){
    // this = this;
    this.moneyMaker.toggle();
  }
};