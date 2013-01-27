describe("Smiling Dancer", function() {
  var smilingDancer;

  beforeEach(function() {
    smilingDancer = makeSmilingDancer(100, 50);
  });

  it("should have a left and top coordinate", function() {
    expect(smilingDancer.left).toBe(100);
    expect(smilingDancer.top).toBe(50);
  });

  it("should have a jQuery node object", function(){
    expect(smilingDancer.$moneyMaker).toEqual(jasmine.any(jQuery));
  });

  it("should have a frequency", function() {
    expect(smilingDancer.frequency).toEqual(jasmine.any(Number));
    expect(smilingDancer.frequency).toBeGreaterThan(0);
  });

  it("should have a step function that shakes its moneyMaker", function() {
    spyOn(smilingDancer.$moneyMaker, 'toggle');
    smilingDancer.step();
    expect(smilingDancer.$moneyMaker.toggle).toHaveBeenCalled();
  });

  it("should have a class of smiling_dancer", function() {
    expect(smilingDancer.$moneyMaker.attr('class')).toBe('smiling_dancer');
  });

  describe("Dance", function() {
    beforeEach(function(){
      $('<div class="stage"></div>').appendTo('body');
    });
    it("should add something to the stage", function(){
      expect($(".stage").html()).toEqual('');
      smilingDancer.dance();
      expect($(".stage").html()).not.toEqual('');
    });
    it("should call step periodically", function() {
      jasmine.Clock.useMock();
      spyOn(smilingDancer, "step");
      smilingDancer.dance();

      expect(smilingDancer.step.callCount).toBe(0);

      jasmine.Clock.tick(smilingDancer.frequency + 10);
      expect(smilingDancer.step.callCount).toBe(1);

      jasmine.Clock.tick(smilingDancer.frequency + 10);
      expect(smilingDancer.step.callCount).toBe(2);
    });
  });


  afterEach(function(){
    $('.stage').remove();
  });

});