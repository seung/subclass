var makeColorDancer = function(left,top){
  /* Creates and returns a new dancer that inherits from makeBlinkyDancer
   * and changes color randomly
   */
  var colorDancer = makeBlinkyDancer(left, top);

  colorDancer.step = function(){
    colorDancer.getInPosition();
    colorDancer.changeColor();
  },

  colorDancer.blink = null;

  colorDancer.$moneyMaker.addClass('color');

  colorDancer.changeColor = function(){

    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);

    var styleColor = {
      border: 10px solid rbg(x,y,z);
    };

    dancer.$moneyMaker.css(styleColor);
  }
    
  return colorDancer;
};
￼￼
// .css({'border': '10px solid rbg(x,y,z)'})￼￼￼
// .css({'background-color': '#ffe', 'border-left': '5px solid #ccc'})