var lightbox = {

  toggle: function() {
    // Prevent click events within the lightbox from dismissing the lightbox.
    // Otherwise, if someone tries to click on text or copy it, the lightbox 
    // disappears.
    $('.lightbox-inner').click(function(event) {
      event.stopPropagation();
    }),

    // .lightbox is not shown by default. When someone clicks an element with the
    // toggleLightbox class, show or hide it.
    $('.toggleLightbox').click(function(el) {
      $('.lightbox').fadeToggle('fast');
    });
  }

};
