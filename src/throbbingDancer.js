var makeThrobbingDancer = function(left, top) {
  var dancer = makeBlinkyDancer(left, top);
  dancer.throbRate = 0.5;
  dancer.radius = 10;
  dancer.radiusString;

  dancer.throb = function(){
    dancer.radius += 1;
    if (dancer.radius > 30) { dancer.radius = 5; }
    dancer.radiusString = dancer.radius.toString() + "px";
  };

  dancer.step = function() {
    dancer.getInPosition();
    dancer.throb();
  }

  dancer.getInPosition = function(){
    var styleObj = {
      top: dancer.top,
      left: dancer.left,
      "border-width": dancer.radiusString,
      "border-radius": dancer.radiusString
    };
    dancer.$moneyMaker.css(styleObj);
    
    return true;
  };
  dancer.getInPosition();

  return dancer;
};