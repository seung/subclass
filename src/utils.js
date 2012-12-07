var _randomColor = function(){

  	var _random = function(){
  		return Math.floor(Math.random() * 255)
  	}
  	var newRGB =  "rgb("+_random()+","+_random()+ ","+_random()+")";
  	return newRGB;
  };
  
var _random = function(){
      var num = Math.random() * .5;
      //console.log (num);
      return num;
    };