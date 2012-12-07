//mixin to change a random dancer's color
var changeDancerColor = function(dancer) {
	var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ','
                     + (Math.floor((256-199)*Math.random()) + 200) + ','
                     + (Math.floor((256-199)*Math.random()) + 200) + ')';
	dancer.moneyMaker.css('border-color', hue);
}