var makeBlinkyDancer = function(left, top){
  /* Creates and returns a new dancer object at the given position,
   * where left is x-coordinate of left side and top is y-coordinate
   * of top side (measured down from top of window). */

  var dancer = {
    // we'll use top and left to set the position of this dancer
    top: top,
    left: left,

    // used in setInterval below
    frequency: Math.random() * 2000,

    // get dressed... (use jQuery to create an HTML <span> tag)
    $moneyMaker: $('<span class="dancer"></span>'),

    dance: function(){
      // go out...  (add our tag to the HTML page)
      dancer.$moneyMaker.appendTo('.stage');
      // ...and do those sexy moves
      // (dancer.step will be called on a timer)
      setInterval(dancer.step, dancer.frequency);
    },

    step: function(){
      dancer.getInPosition();
      dancer.blink();
    },

    getInPosition: function(){
      /* Use css top and left properties to position our <span> tag
       * where it belongs on the page. See http://api.jquery.com/css/
       */
      var styleObj = {
        top: dancer.top,
        left: dancer.left
      };
      dancer.$moneyMaker.css(styleObj);
    },

    blink: function(){
      /* toggle() is a jQuery method to show/hide the <span> tag.
       * See http://api.jquery.com/category/effects/ for this and
       * other effects you can use on a jQuery-wrapped html tag. */
      dancer.$moneyMaker.toggle();
    }

  }; // end dancer

  dancer.getInPosition();

  return dancer;
};

var ourDancer = function(left, top){
  var newDancer = makeBlinkyDancer(left, top);
  newDancer.$moneyMaker = $('<span class="newDancer"></span>');
  newDancer.getInPosition();
  return newDancer;
};

var movingDancer = function(left, top){
  var mover = makeBlinkyDancer(left, top);
  mover.$moneyMaker = $('<span class="movingDancer"></span>');

  mover.dance = function(){
    mover.$moneyMaker.appendTo('.stage');
    setTimeout(mover.step, Math.random() * 1000);
  };

  mover.step = function(){
    mover.getInPosition();
    var move = function(){
      var dirHor = 1;
      var dirVer = 1;
      if (Math.random()<0.5){dirHor=-1;};
      if (Math.random()<0.5){dirVer=-1;};
      $('.movingDancer').animate({
        left: dirHor * Math.random() * $("body").width(),
        top: dirVer * Math.random() * $("body").height()
        }, Math.random() * 6000, function() {
          move();
      });
    };
    move();
  };

  mover.getInPosition();
  return mover;
};

var changingDancer = function(left,top) {
  var changer = makeBlinkyDancer(left, top);
  changer.$moneyMaker = $('<span class="changingDancer"></span>');

  changer.dance = function(){
    changer.$moneyMaker.appendTo('.stage');
    setTimeout(changer.step, Math.random() * 1000);
  };

  changer.step = function(){
    changer.getInPosition();
    var changeColour = function(){
      $('.changingDancer').animate({
        // border: "30px solid rgb(" + 'Math.floor(Math.random() *254)' + ','  + 'Math.floor(Math.random() *254)' + ',' + 'Math.floor(Math.random() *254)' + ')' ,
        border : '30px solid red',
        top: Math.random() * $("body").height()
        }, Math.random() * 6000, function() {
          changeColour();
          console.log('30px solid rgb(' + Math.floor(Math.random() *256) + ','  + Math.floor(Math.random() *256) + ',' + Math.floor(Math.random() *256) + ')');
      });
    };
    changeColour();
  };

  changer.getInPosition();
  return changer;
};





