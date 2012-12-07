//mixin that turns dancers into pictures
var dancerChanger = function(functionName, dancers){

	functionDictionary = {
		makePicture: function(dancers){
			var allDancers = dancers;
			var randomClassGenerator = ['monster','ballet','monkey','mime','discoball','champagne'];
			
			for(var i = 0; i < allDancers.length; i++){
				allDancers[i].moneyMaker.attr('class', '').addClass('dancer ' + randomClassGenerator[Math.floor(Math.random()*6)]);
			}
		},

		//mixin that turns all dancers into ballerinas
		makeBallet: function(dancers){
			var allDancers = dancers;
			for(var i = 0; i < allDancers.length; i++){
				allDancers[i].moneyMaker.attr('class', '').addClass('dancer ballet');
			}
		},

		//mixin that adds a box around dancers
		makeABox: function(dancers){
			var allDancers = dancers;
			for(var i = 0; i < allDancers.length; i++){
				allDancers[i].moneyMaker.addClass('resize');
			}
		},

		//mixin that flips the picture dancers
		makeRotate: function(dancers){
			var allDancers = dancers;
			for(var i = 0; i < allDancers.length; i++){
				allDancers[i].moneyMaker.addClass('flip');
			}
		},

	};
	functionDictionary[functionName](dancers);
	
}