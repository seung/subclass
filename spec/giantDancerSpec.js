describe("Giant Dancer", function() {
  var giantDancer;

  beforeEach(function(){
    giantDancer = makeGiantDancer(200, 10);
  });

  it("should have a left and top coordinate", function() {
    expect(giantDancer.left).toBe(200);
    expect(giantDancer.top).toBe(10);
  });

  it("should have a jQuery node object", function(){
    expect(giantDancer.$moneyMaker).toEqual(jasmine.any(jQuery));
  }); 

  it("should have a frequency", function() {
    expect(giantDancer.frequency).toEqual(jasmine.any(Number));
    expect(giantDancer.frequency).toBeGreaterThan(0);
  });

  it("should have a step function that shakes its moneyMaker", function() {
    spyOn(giantDancer.$moneyMaker, 'toggle');
    giantDancer.step();
    expect(giantDancer.$moneyMaker.toggle).toHaveBeenCalled();
  });

  it("should have a class of giant_dancer", function() {
    expect(giantDancer.$moneyMaker.attr('class')).toBe('giant_dancer');
  });

  describe("Dance", function() {
    beforeEach(function(){
      $('<div class="stage"></div>').appendTo('body');
    });
    it("should add something to the stage", function() {
      expect($(".stage").html()).toEqual('');
      giantDancer.dance();
      expect($("stage").html()).not.toEqual('');
    });

    it("should call step periodically", function() {
      jasmine.Clock.useMock();
      spyOn(giantDancer, "step");
      giantDancer.dance();

      expect(giantDancer.step.callCount).toBe(0);

      jasmine.Clock.tick(giantDancer.frequency + 10);
      expect(giantDancer.step.callCount).toBe(1);

      jasmine.Clock.tick(giantDancer.frequency + 10);
      expect(giantDancer.step.callCount).toBe(2);
    });
  });

  afterEach(function(){
    $('.stage').remove();
  });
  
});