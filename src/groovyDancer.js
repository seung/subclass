var makeGroovyDancer = function(left,top){
  /* Creates and returns a new dancer that inherits from makeBlinkyDancer
   * and changes color randomly
   */
  var n = null; 
  var groovyDancer = makeBlinkyDancer(left, top);

  groovyDancer.$moneyMaker = $('<span class="groovy"><img src="austin.gif" /></span>');

  groovyDancer.step = function(){
      groovyDancer.getInPosition();
      groovyDancer.moveAcrossScreen();
    };

  
  groovyDancer.moveAcrossScreen = function(){
    var animateObj = {
      'margin-left': 0,
      'margin-top':  0
    };
    colorDancer.$moneyMaker.animate(animateObj,2000);
  };
  
 
return groovyDancer;
};

