var extend = function(copyTo, copyFrom) {
  for(var key in copyFrom) {
    copyTo[key] = copyFrom[key];
  }
};

var dancerMethods = {
  dance: function(){
    // go out...  (add our tag to the HTML page)
    this.$moneyMaker.appendTo('.stage');
    var that = this;
    setInterval(function() {
      that.step();
    }, this.frequency);
  },

  step: function(){
    this.getInPosition();
    this.blink();
  },

  getInPosition: function(){
    /* Use css top and left properties to position our <span> tag
     * where it belongs on the page. See http://api.jquery.com/css/
     */
    var styleObj = {
      top: this.top,
      left: this.left
    };
    this.$moneyMaker.css(styleObj);
  },

  blink: function(){
    this.$moneyMaker.toggle();
  }
};

// makers

var makeDancer = function(left, top) {
  var dancer = {
    top: top,
    left: left,
    frequency: Math.random() * 150,
    $moneyMaker: $('<span class="dancer"></span>')
  }

  extend(dancer, dancerMethods);

  dancer.getInPosition();
  return dancer;
};

var makeBlinkyDancer = function(left, top){
  var blinkyDancer = {
    top: top,
    left: left,
    frequency: Math.random() * 2000,
    $moneyMaker: $('<span class="blinky-dancer"></span>')
  }; // end dancer

  extend(blinkyDancer, dancerMethods);

  blinkyDancer.getInPosition();
  return blinkyDancer;
};