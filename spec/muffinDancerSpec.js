describe("muffinDancer", function() {
  var muffinDancer;

  beforeEach(function() {
    muffinDancer = makeMuffinDancer(30, 50);
  });

  it("should have a left and top coordinate", function(){
    expect(muffinDancer.left).toBe(30);
    expect(muffinDancer.top).toBe(50);
  });

  it("should have a jQuery node object", function(){
    expect(muffinDancer.$moneyMaker).toEqual(jasmine.any(jQuery));
  });

  it("should have a frequency", function(){
    expect(muffinDancer.frequency).toEqual(jasmine.any(Number));
    expect(muffinDancer.frequency).toBeGreaterThan(0);
  });

  it("should have a step function that shakes its moneyMaker", function() {
    spyOn(muffinDancer.$moneyMaker, 'toggle');
    muffinDancer.step();
    expect(muffinDancer.$moneyMaker.toggle).toHaveBeenCalled();
  });

  describe("dance", function(){
    beforeEach(function(){
      $('<div class="stage"></div>').appendTo('body');
    });

    it("should add something to the stage", function(){
      expect($(".stage").html()).toEqual('');
      muffinDancer.dance();
      expect($(".stage").html()).not.toEqual('');
    });

    it("should call step periodically", function(){
      // setup
      jasmine.Clock.useMock(); // sets up a way to delay this test -- used below
      spyOn(muffinDancer, "step");
      muffinDancer.dance();

      expect(muffinDancer.step.callCount).toBe(0);

      jasmine.Clock.tick(muffinDancer.frequency + 10);
      expect(muffinDancer.step.callCount).toBe(1);

      jasmine.Clock.tick(muffinDancer.frequency + 10);
      expect(muffinDancer.step.callCount).toBe(2);
    });

    afterEach(function(){
      $('.stage').remove();
    });
  });
});
