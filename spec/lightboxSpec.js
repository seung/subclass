describe("lightbox", function() {
  // Some of these tests depend on features that Chrome does not
  // support out of the box. Return true if user is using Chrome.
  var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

  it("should be a object named lightbox", function(){
    expect(lightbox).toEqual(jasmine.any(Object));
  });

  describe("toggle", function() {

    // Import index.html and set up a listener for the toggleLightbox class,
    // which is what the user clicks to toggle the lightbox display
    beforeEach( function() {
      if (is_chrome === false) {
        loadFixtures('index.html');
      }
      spyOnEvent($('.toggleLightbox'), 'click');
    });

    it("should be a method named toggle", function() {
      expect(lightbox.toggle).toEqual(jasmine.any(Function));
    });

    if (is_chrome === true) {
      alert('FYI: Some tests are being skipped because of a Chrome-specific limitation on loadFixtures. Try running this test in Firefox.');
    } else {
      it("should display the lightbox when clicked", function() {
        $('.toggleLightbox').click();
        expect('click').toHaveBeenTriggeredOn($('.toggleLightbox'));
      });
    }


  });

});
