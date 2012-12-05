var shouldDancerMove = function() {
	var movingDancer = null;
	var dancerPositions = [];
	for (var i in window.dancers) {
		var tempPosition = {};
		tempPosition.top = window.dancers[i].css("top");
		tempPosition.left = window.dancers[i].css("left");
		dancerPositions[i] = tempPosition;
	};
	for (var i in dancerPositions) {
		var tempDancer = dancerPositions[i];
		for (var j = i+1; j = dancerPositions.length; j += 1) {
			if (Math.sqrt((dancerPositions[i].top)
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