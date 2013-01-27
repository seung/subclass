


var makeColorDancer = function(left,top){
  /* Creates and returns a new dancer that inherits from makeBlinkyDancer
   * and changes color randomly
   */

  var colorDancer = makeBlinkyDancer(left, top);

  colorDancer.$moneyMaker = $('<span class="random"></span>');

  colorDancer.step = function(){
    colorDancer.getInPosition();
    colorDancer.changeColor();
  },

  colorDancer.changeColor = function(){

    var w = Math.floor(Math.random() * 100);
    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);

    var styleColor = {
      //'border': '10px solid rgb(121,232,14)'
      'border':  w.toString() + 'px solid rgb(' + x.toString() + ',' + y.toString() + ',' + z.toString() + ')',
      'border-radius': w.toString() + 'px'
      //'border': w.toString() + 'px solid rgb(' + x.toString() + ',' + y.toString() + ',' + z.toString() + ')'
    };

    colorDancer.$moneyMaker.css(styleColor);
  }
    
  return colorDancer;
};

// .css({'border': '10px solid rbg(x,y,z)'})￼￼￼
// .css({'background-color': '#ffe', 'border-left': '5px solid #ccc'})
