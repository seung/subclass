describe("rabiesDancer", function() {
  var rabiesDancer;

  beforeEach(function() {
    rabiesDancer = makeRabiesDancer(30, 50);
  });

  it("should have a left and top coordinate", function(){
    expect(rabiesDancer.left).toBe(30);
    expect(rabiesDancer.top).toBe(50);
  });

  it("should have a jQuery node object", function(){
    expect(rabiesDancer.$moneyMaker).toEqual(jasmine.any(jQuery));
  });

  it("should have a frequency", function(){
    expect(rabiesDancer.frequency).toEqual(jasmine.any(Number));
    expect(rabiesDancer.frequency).toBeGreaterThan(0);
  });

  it("should have a step function that shakes its moneyMaker", function() {
    spyOn(rabiesDancer.$moneyMaker, 'toggle');
    rabiesDancer.step();
    expect(rabiesDancer.$moneyMaker.toggle).toHaveBeenCalled();
  });

  describe("dance", function(){
    beforeEach(function(){
      $('<div class="stage"></div>').appendTo('body');
    });

    it("should add something to the stage", function(){
      expect($(".stage").html()).toEqual('');
      rabiesDancer.dance();
      expect($(".stage").html()).not.toEqual('');
    });

    it("should call step periodically", function(){
      // setup
      jasmine.Clock.useMock(); // sets up a way to delay this test -- used below
      spyOn(rabiesDancer, "step");
      rabiesDancer.dance();

      expect(rabiesDancer.step.callCount).toBe(0);

      jasmine.Clock.tick(rabiesDancer.frequency + 10);
      expect(rabiesDancer.step.callCount).toBe(1);

      jasmine.Clock.tick(rabiesDancer.frequency + 10);
      expect(rabiesDancer.step.callCount).toBe(2);
    });

    afterEach(function(){
      $('.stage').remove();
    });
  });

  describe("walk", function(){

    it("should change the left and top coordinate", function(){
      rabiesDancer.walk();
      expect(rabiesDancer.left).toBe(40);
      expect(rabiesDancer.top).toBe(60);
    });



  });
});
