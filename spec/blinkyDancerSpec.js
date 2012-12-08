describe("blinkyDancer", function() {
  var blinkyDancer;

  it("should have a frequency", function(){
    expect(blinkyDancer.frequency).toEqual(jasmine.any(Number));
    expect(blinkyDancer.frequency).toBeGreaterThan(0);
  });

  describe("dance", function(){
    beforeEach(function(){
      $('<div class="stage"></div>').appendTo('body');
    });

    it("should add something to the stage", function(){
      expect($(".stage").html()).toEqual('');
      blinkyDancer.dance();
      expect($(".stage").html()).not.toEqual('');
    });

    it("should call step periodically", function(){
      // setup
      jasmine.Clock.useMock(); // sets up a way to delay this test -- used below
      spyOn(blinkyDancer, "step");
      blinkyDancer.dance();

      expect(blinkyDancer.step.callCount).toBe(0);

      jasmine.Clock.tick(blinkyDancer.frequency + 10);
      expect(blinkyDancer.step.callCount).toBe(1);

      jasmine.Clock.tick(blinkyDancer.frequency + 10);
      expect(blinkyDancer.step.callCount).toBe(2);
    });

    afterEach(function(){
      $('.stage').remove();
    });
  });
});
