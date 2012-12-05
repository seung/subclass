describe("colorDancer", function() {
  var colorDancer;

  beforeEach(function() {
    colorDancer = makeColorDancer(20, 10);
  });

  it("should have a left and top coordinate", function(){
    expect(colorDancer.left).toBe(20);
    expect(colorDancer.top).toBe(10);
  });

  it("should have a jQuery node object", function(){
    expect(colorDancer.moneyMaker).toEqual(jasmine.any(jQuery));
  });

  it("should have a frequency", function(){
    expect(colorDancer.frequency).toEqual(jasmine.any(Number));
    expect(colorDancer.frequency).toBeGreaterThan(0);
  });

  it("should have a step function that shakes its moneyMaker", function() {
    spyOn(colorDancer.moneyMaker, 'toggle');
    colorDancer.step();
    expect(colorDancer.moneyMaker.toggle).toHaveBeenCalled();
  });

  describe("dance", function(){
    beforeEach(function(){
      $('<div class="stage"></div>').appendTo('body');
    });

    it("should add something to the stage", function(){
      expect($(".stage").html()).toEqual('');
      colorDancer.dance();
      expect($(".stage").html()).not.toEqual('');
    });

    it("should call step periodically", function(){
      // setup
      jasmine.Clock.useMock(); // sets up a way to delay this test -- used below
      spyOn(colorDancer, "step");
      colorDancer.dance();

      expect(colorDancer.step.callCount).toBe(0);

      jasmine.Clock.tick(colorDancer.frequency + 10);
      expect(colorDancer.step.callCount).toBe(1);

      jasmine.Clock.tick(colorDancer.frequency + 10);
      expect(colorDancer.step.callCount).toBe(2);
    });

    afterEach(function(){
      $('.stage').remove();
    });
  });
});
