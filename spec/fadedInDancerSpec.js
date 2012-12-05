describe("fadedInDancer", function() {
  var fadedInDancer;

  beforeEach(function() {
    fadedInDancer = makeFadedInDancer(20, 10);
  });

  it("should have a left and top coordinate", function(){
    expect(fadedInDancer.left).toBe(20);
    expect(fadedInDancer.top).toBe(10);
  });

  it("should have a jQuery node object", function(){
    expect(fadedInDancer.moneyMaker).toEqual(jasmine.any(jQuery));
  });

  it("should have a frequency", function(){
    expect(fadedInDancer.frequency).toEqual(jasmine.any(Number));
    expect(fadedInDancer.frequency).toBeGreaterThan(0);
  });

  it("should have a step function that shakes its moneyMaker", function() {
    spyOn(fadedInDancer.moneyMaker, 'fadeOut');
    fadedInDancer.step();
    expect(fadedInDancer.moneyMaker.fadeIn().delay().fadeOut).toHaveBeenCalled();
  });

  describe("dance", function(){
    beforeEach(function(){
      $('<div class="stage"></div>').appendTo('body');
    });

    it("should add something to the stage", function(){
      expect($(".stage").html()).toEqual('');
      fadedInDancer.dance();
      expect($(".stage").html()).not.toEqual('');
    });

    it("should call step periodically", function(){
      // setup
      jasmine.Clock.useMock(); // sets up a way to delay this test -- used below
      spyOn(fadedInDancer, "step");
      fadedInDancer.dance();

      expect(fadedInDancer.step.callCount).toBe(0);

      jasmine.Clock.tick(fadedInDancer.frequency + 10);
      expect(fadedInDancer.step.callCount).toBe(1);

      jasmine.Clock.tick(fadedInDancer.frequency + 10);
      expect(fadedInDancer.step.callCount).toBe(2);
    });

    afterEach(function(){
      $('.stage').remove();
    });
  });
});
