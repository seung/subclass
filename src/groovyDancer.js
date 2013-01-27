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
      'margin-left': 100,
      'margin-top':  250
    };
    groovyDancer.$moneyMaker.animate({"left": "+=50px"}, "slow");
    //groovyDancer.$moneyMaker.animate(animateObj,5000,'linear' );
  };
  
 
return groovyDancer;
};

//specialEasing: {width: 'linear', height: 'easeOutBounce'}