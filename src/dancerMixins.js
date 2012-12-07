//mixin to change a random dancer's color
var changeDancerColor = function(dancer) {
	var randomNumber = function () {
		return (Math.floor(Math.random()*(255))
	}

	var hue = 'rgb(' + randomNumber() + ','
                     + randomNumber() + ','
                     + randomNumber() + ')';
	dancer.moneyMaker.css('border-color', hue);
}