var dancerClasses = [

	['Beach Ball Dancer', function(w, h){
		BlinkyDancer.call(this, w, h);
	  this.moneyMaker.html("<img src='pinwheel.png' height=75px width=75px>");
	  this.moneyMaker.css("border", "none");
	}],

	['Grinchy Dancer', function(w, h){
		BlinkyDancer.call(this, w, h);
	  this.moneyMaker.html("<img src='grinchface.png' height=200px width=160px>");
	  this.moneyMaker.css("border", "none");		
	}],

	['Tiny Dancer', function(w, h){
		BlinkyDancer.call(this, w, h);
	  this.moneyMaker.css("transition","border-width 10s linear ");
	  this.moneyMaker.css("border-width","5px")
	  this.moneyMaker.css("border-color", randomColor());
	}],

	['Cat Dancer', function(w, h){
		BlinkyDancer.call(this, w, h);
	  this.moneyMaker.html("<img src='catman.png' width=75px, height=100px>");
	  this.moneyMaker.css("border", "none");
	}]

];
