var GroovyDancer = function(left,top){
  /* Creates and returns a new dancer that inherits from makeBlinkyDancer
   * and changes color randomly
   */
  this.top = top;
  this.left = left;
  this.frequency = Math.random() * 2000;
  this.$moneyMaker = $('<span class="groovy"><img src="austin.gif" /></span>');
  this.getInPosition();
};  

//var n = null; 

GroovyDancer.prototype = Object.create(Dancer.prototype);
  
GroovyDancer.step = function(){
  this.getInPosition();
  this.moveAcrossScreen();
};
  
GroovyDancer.moveAcrossScreen = function(){
  var animateObj = {
    'margin-left': 100,
    'margin-top':  250
  };
  //this.$moneyMaker.animate({"left": "+=50px"}, "slow");
};
