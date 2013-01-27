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

  rabiesDancer.frequency = 30;

  rabiesDancer.$moneyMaker = $('<img src="img/Toter.png" class="rabies-dancer">');

  rabiesDancer.getInPosition();

  // rabiesDancer.bounce = function(top, left){

  //   if (rabiesDancer.top <= 0) rabiesDancer.walk(10, 5);
  //   if (rabiesDancer.top >= bottomBoundary) rabiesDancer.walk(-10, 5);
  //   if (rabiesDancer.left <= 0) rabiesDancer.walk(5, 10);
  //   if (rabiesDancer.left >= rightBoundary) rabiesDancer.walk(5, -10);

  // }

  var vertVelocity = 10;
  var horizVelocity = 10;

  rabiesDancer.walk = function(top, left){
    var rightBoundary = $("body").width();
    var bottomBoundary = $("body").height();
    
    if (rabiesDancer.top > bottomBoundary) vertVelocity *= -1;
    if (rabiesDancer.top < 0) vertVelocity *= -1;
    if (rabiesDancer.left < 0) horizVelocity *= -1;
    if (rabiesDancer.left > rightBoundary) horizVelocity *= -1;

    rabiesDancer.top += vertVelocity;
    rabiesDancer.left += horizVelocity;



    // return rabiesDancer.$moneyMaker;
    return true;
  };

  // rabiesDancer.getInPosition = function(){
  //    Use css top and left properties to position our <span> tag
  //    * where it belongs on the page. See http://api.jquery.com/css/
     
  //   var styleObj = {
  //     top: rabiesDancer.top,
  //     left: rabiesDancer.left
  //   };
  //   rabiesDancer.$moneyMaker.css(styleObj);
  // };

  rabiesDancer.step = function() {
    rabiesDancer.getInPosition();
    rabiesDancer.walk();
  };


  return rabiesDancer;

}


