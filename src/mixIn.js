var mixIn = function() {

	for(dancer in window.dancers){
		dancer.step = function(){
			dancer.getInPosition();
		}
	}

};