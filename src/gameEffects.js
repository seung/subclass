var shootBullet = function(left) {
	var newBullet = {
		aBullet: $('<span class="bulletParticle></span>').css('aBullet'),
		startPos: shootBullet.aBullet.css('left', left),
		shoot: function() {
			newBullet.aBullet.appendTo('.stage');
		}
	};
	newBullet.startPos();

	return newBullet;
};

var triCoords = $('.triangle');

var newBullet = shootBullet(triCoords.position.left);
// newBullet.shoot();



// $('.stage').on('click', function() {
// 		var $newBullet = shootBullet();
//   	$('.stage').append($newBullet);
//   });



// case 32:                
//     $('#block').append('<div class="bullet"></div>');
// //    }
