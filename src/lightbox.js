$(document).ready(function() {
  
  $('.toggleLightbox').click(function(el) {
    if ($(el.target).parents('.lightbox-outer').length === 1) {
      return false;
    } else {
      $('.lightbox').fadeToggle('fast');
    }
  });

});
