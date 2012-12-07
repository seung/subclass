var shootBullet = function(left) {
	var newBullet = {
		aBullet: $('<span class="bulletParticle></span>'),
		startPos: aBullet.css('left', left),
		shoot: function() {
			newBullet.aBullet.appendTo('.stage');
		}
	};
	newBullet.startPos();

	return newBullet;
};

var triCoords = $('.triangle');
var pos = triCoords.position();
var newBullet = shootBullet();
// newBullet.shoot();



// $('.stage').on('click', function() {
// 		var $newBullet = shootBullet();
//   	$('.stage').append($newBullet);
//   });



// case 32:                
//     $('#block').append('<div class="bullet"></div>');
// //    }
