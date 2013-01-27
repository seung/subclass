var makeColorfulDancer = function(left, top){
  var dancer = makeBlinkyDancer(left, top);
  dancer.color = "blue";
  dancer.blueness = 0;
  dancer.frequency = Math.random() * 200;

  dancer.step = function(){
    dancer.getInPosition();
    dancer.shimmer();
  };

  dancer.shimmer = function(){
    dancer.blueness += 1;
    if (dancer.blueness >= 255) {
      dancer.blueness = 0;
    }
    dancer.color = "#ff00" + dancer.blueness.toString(16);
    //console.log(dancer.color);
  };

  dancer.getInPosition = function(){
    var styleObj = {
      top: dancer.top,
      left: dancer.left,
      "border-color": dancer.color
    };
    dancer.$moneyMaker.css(styleObj);
    return true;
  };
  dancer.getInPosition();
  return dancer;
};

//Increase the blueness until it reaches a max, then set it to 10.
//
//
//
//
//
