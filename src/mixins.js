var makeMixinController = function(){

	var mixins = {
		selectRandomDancer: function(){
		  var num = Math.round(Math.random() * (window.dancers.length - 1));
		  return window.dancers[num];
		},

		addZRotation: function() {
		  var aDancer = this.selectRandomDancer();
		  
		  aDancer.blink = function(){
		  	aDancer.moneyMaker.css("transform", "rotate(20deg)");
		  	aDancer.moneyMaker.toggle();
		  };
		  
		},
		addRandomColor: function(){
		  var aDancer = this.selectRandomDancer();
		  aDancer.blink = function(){
		  
		  	aDancer.moneyMaker.css("border-color", _randomColor())
		  	aDancer.moneyMaker.toggle();
		  };

		}

	};

	return mixins;
};


