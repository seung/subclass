describe("blinkyDancer", function() {
  var blinkyDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    jasmine.Clock.useMock();

    blinkyDancer = makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(blinkyDancer.$node).toEqual(jasmine.any(jQuery));
  });

  it("should have a step function that makes its node blink", function() {
    spyOn(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle).toHaveBeenCalled();
  });

  describe("dance", function(){

    it("should call step periodically", function(){
      spyOn(blinkyDancer, "step").andCallThrough();
      // need to let some time pass
      // the spied-upon step function will not be called the first time around
      jasmine.Clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).toBe(0);

      jasmine.Clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).toBe(1);

      jasmine.Clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).toBe(2);
    });

  });
});
