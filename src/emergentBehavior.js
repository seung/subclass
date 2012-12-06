var shouldDancerMove = function() {
	if (window.dancers.length > 1) {
		var movingDancer = null;
		var dancerPositions = [];
		for (var i = 0; i < window.dancers.length; i += 1) {
			var tempPosition = {};
			tempPosition.top = window.dancers[i].top;
			tempPosition.left = window.dancers[i].left;
			dancerPositions[i] = tempPosition;
		};
		for (var i = 0; i < dancerPositions.length; i += 1) {
			var tempDancer = dancerPositions[i];
			for (var j = i+1; j < dancerPositions.length; j += 1) {
				if (distance(tempDancer, dancerPositions[j]) < 10000) {
					tempDancer.top = Math.floor(Math.random() * $("body").height());
					tempDancer.left = Math.floor(Math.random() * $("body").width());
					// window.dancers[i].moneyMaker.css({top: tempDancer.top, left: tempDancer.left});
					window.dancers[i].moneyMaker.css("top", tempDancer.top + "px");
					window.dancers[i].moneyMaker.css("left", tempDancer.left + "px");
					window.dancers[i].moneyMaker.text(i + ", " + tempDancer.top + ", " + tempDancer.left);
				}
			}
			window.dancers[i].moneyMaker.text(i + ", " + tempDancer.top + ", " + tempDancer.left);
		}
	}
}

// points are defined as arrays with top: and left: keys.
var distance = function(pointA, pointB) {
	var calculatedDistance = null;
	var xDiff = null;
	var yDiff = null;

	xDiff = pointA.left - pointB.left;
	yDiff = pointA.top - pointB.top;

	operand = xDiff * xDiff + yDiff * yDiff;
	calculatedDistance = Math.sqrt(operand);

	return calculatedDistance;
}