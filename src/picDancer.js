// var makePicDancer = function (left, top) {
// 	var picDancer = makeBlinkyDancer(left, top);
// 	var randomClassGenerator = ['monster','ballet','champagne','monkey','mime','discoball'];
// 	picDancer.moneyMaker.addClass(randomClassGenerator[Math.floor(Math.random()*6)]);
// 	return picDancer;
// }

var makePicture = function(){
	var randomClassGenerator = ['monster','ballet','monkey','mime','discoball','champagne'];
	// debugger
	for(var i = 0; i < window.dancers.length; i++){
		window.dancers[i].moneyMaker.attr('class', '');
		window.dancers[i].moneyMaker.addClass('dancer');
		window.dancers[i].moneyMaker.addClass(randomClassGenerator[Math.floor(Math.random()*6)]);
	}
}

var makeBallet = function(){
	for(var i = 0; i < window.dancers.length; i++){
		window.dancers[i].moneyMaker.attr('class', '');
		window.dancers[i].moneyMaker.addClass('dancer');
		window.dancers[i].moneyMaker.addClass('ballet');
	}
}

var makeBigger = function(){
	for(var i = 0; i < window.dancers.length; i++){
		window.dancers[i].moneyMaker.addClass('resize');
	}
}

var makeRotate = function(){
	for(var i = 0; i < window.dancers.length; i++){
		window.dancers[i].moneyMaker.addClass('flip');
	}
}