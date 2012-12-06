describe("goldenDancer", function() {
  var goldenDancer;

  beforeEach(function() {
    goldenDancer = makeBlinkyDancer(20, 10);
  });

  it("should have a left and top coordinate", function(){
    expect(goldenDancer.left).toBe(20);
    expect(goldenDancer.top).toBe(10);
  });

  it("should have a jQuery node object", function(){
    expect(goldenDancer.moneyMaker).toEqual(jasmine.any(jQuery));
  });

  it("should have a frequency", function(){
    expect(goldenDancer.frequency).toEqual(jasmine.any(Number));
    expect(goldenDancer.frequency).toBeGreaterThan(0);
  });

  it("should have a step function that shakes its moneyMaker", function() {
    spyOn(goldenDancer.moneyMaker, 'toggle');
    goldenDancer.step();
    expect(goldenDancer.moneyMaker.toggle).toHaveBeenCalled();
  });

  describe("dance", function(){
    beforeEach(function(){
      $('<div class="stage"></div>').appendTo('body');
    });

    it("should add something to the stage", function(){
      expect($(".stage").html()).toEqual('');
      goldenDancer.dance();
      expect($(".stage").html()).not.toEqual('');
    });

    it("should call step periodically", function(){
      // setup
      jasmine.Clock.useMock(); // sets up a way to delay this test -- used below
      spyOn(goldenDancer, "step");
      goldenDancer.dance();

      expect(goldenDancer.step.callCount).toBe(0);

      jasmine.Clock.tick(goldenDancer.frequency + 10);
      expect(goldenDancer.step.callCount).toBe(1);

      jasmine.Clock.tick(goldenDancer.frequency + 10);
      expect(goldenDancer.step.callCount).toBe(2);
    });

    afterEach(function(){
      $('.stage').remove();
    });
  });
});
