describe("privateDancer", function() {
  var privateDancer;

  beforeEach(function() {
    privateDancer = makeBlinkyDancer(20, 10);
  });

  it("should have a left and top coordinate", function(){
    expect(privateDancer.left).toBe(20);
    expect(privateDancer.top).toBe(10);
  });

  it("should have a jQuery node object", function(){
    expect(privateDancer.$moneyMaker).toEqual(jasmine.any(jQuery));
  });

  it("should have a frequency", function(){
    expect(privateDancer.frequency).toEqual(jasmine.any(Number));
    expect(privateDancer.frequency).toBeGreaterThan(0);
  });

  it("should have a step function that shakes its moneyMaker", function() {
    spyOn(privateDancer.$moneyMaker, 'toggle');
    privateDancer.step();
    expect(privateDancer.$moneyMaker.toggle).toHaveBeenCalled();
  });

  describe("dance", function(){
    beforeEach(function(){
      $('<div class="stage"></div>').appendTo('body');
    });

    it("should add something to the stage", function(){
      expect($(".stage").html()).toEqual('');
      privateDancer.dance();
      expect($(".stage").html()).not.toEqual('');
    });

    it("should call step periodically", function(){
      // setup
      jasmine.Clock.useMock(); // sets up a way to delay this test -- used below
      spyOn(privateDancer, "step");
      privateDancer.dance();

      expect(privateDancer.step.callCount).toBe(0);

      jasmine.Clock.tick(privateDancer.frequency + 10);
      expect(privateDancer.step.callCount).toBe(1);

      jasmine.Clock.tick(privateDancer.frequency + 10);
      expect(privateDancer.step.callCount).toBe(2);
    });

    afterEach(function(){
      $('.stage').remove();
    });
  });
});
