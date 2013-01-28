describe("tinyDancer", function() {
  var tinyDancer;

  beforeEach(function() {
    tinyDancer = makeBlinkyDancer(20, 10);
  });

  it("should have a left and top coordinate", function(){
    expect(tinyDancer.left).toBe(20);
    expect(tinyDancer.top).toBe(10);
  });

  it("should have a jQuery node object", function(){
    expect(tinyDancer.$moneyMaker).toEqual(jasmine.any(jQuery));
  });

  it("should have a frequency", function(){
    expect(tinyDancer.frequency).toEqual(jasmine.any(Number));
    expect(tinyDancer.frequency).toBeGreaterThan(0);
  });

  it("should have a step function that shakes its moneyMaker", function() {
    spyOn(tinyDancer.$moneyMaker, 'toggle');
    tinyDancer.step();
    expect(tinyDancer.$moneyMaker.toggle).toHaveBeenCalled();
  });

  describe("dance", function(){
    beforeEach(function(){
      $('<div class="stage"></div>').appendTo('body');
    });

    it("should add something to the stage", function(){
      expect($(".stage").html()).toEqual('');
      tinyDancer.dance();
      expect($(".stage").html()).not.toEqual('');
    });

    it("should call step periodically", function(){
      // setup
      jasmine.Clock.useMock(); // sets up a way to delay this test -- used below
      spyOn(tinyDancer, "step");
      tinyDancer.dance();

      expect(tinyDancer.step.callCount).toBe(0);

      jasmine.Clock.tick(tinyDancer.frequency + 10);
      expect(tinyDancer.step.callCount).toBe(1);

      jasmine.Clock.tick(tinyDancer.frequency + 10);
      expect(tinyDancer.step.callCount).toBe(2);
    });

    afterEach(function(){
      $('.stage').remove();
    });
  });
});
