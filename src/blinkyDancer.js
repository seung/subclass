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

var makeMuffinDancer = function(left, top) {
  var muffinDancer = makeBlinkyDancer(left, top);

  muffinDancer.frequency = 2000;

  muffinDancer.$moneyMaker = $('<img src="img/MrCupcake.png" class="muffin-dancer">');

  muffinDancer.getInPosition();

  return muffinDancer;
}


var makeRabiesDancer = function(left, top) {
  var rabiesDancer = makeBlinkyDancer(left, top);

  rabiesDancer.frequency = 35;

  rabiesDancer.$moneyMaker = $('<img src="img/Toter.png" class="rabies-dancer">');

  rabiesDancer.getInPosition();

  var dX = 10;
  var dY = 10;

  rabiesDancer.walk = function(top, left){
    var floorWidth = $("body").width();
    var floorHeight = $("body").height();

    if (rabiesDancer.left < 0) dX *= -1;
    if (rabiesDancer.left > floorWidth) dX *= -1;
    if (rabiesDancer.top > floorHeight) dY *= -1;
    if (rabiesDancer.top < 0) dY *= -1;

    rabiesDancer.left += dX;
    rabiesDancer.top += dY;

    return true;
  };

  rabiesDancer.step = function() {
    rabiesDancer.getInPosition();
    rabiesDancer.walk();
  };


  return rabiesDancer;

}


