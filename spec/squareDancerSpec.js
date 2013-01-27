describe("Square Dancer", function() {
  var squareDancer;

  beforeEach(function() {
    squareDancer = makeSquareDancer(100, 50);
  });

  it("should have a left and top coordinate", function() {
    expect(squareDancer.left).toBe(100);
    expect(squareDancer.top).toBe(50);
  });

  it("should have a jQuery node object", function(){
    expect(squareDancer.$moneyMaker).toEqual(jasmine.any(jQuery));
  });

  it("should have a frequency", function() {
    expect(squareDancer.frequency).toEqual(jasmine.any(Number));
    expect(squareDancer.frequency).toBeGreaterThan(0);
  });

  it("should have a step function that shakes its moneyMaker", function() {
    spyOn(squareDancer.$moneyMaker, 'toggle');
    squareDancer.step();
    expect(squareDancer.$moneyMaker.toggle).toHaveBeenCalled();
  });

  it("should have a square shape", function() {
    expect(squareDancer.$moneyMaker.attr('class')).toBe('square_dancer');
    // expect($('.square_dancer')).toHaveCSS({"border-radius: 0px"});
  });

  describe("Dance", function() {
    beforeEach(function(){
      $('<div class="stage"></div>').appendTo('body');
    });
    it("should add something to the stage", function(){
      expect($(".stage").html()).toEqual('');
      squareDancer.dance();
      expect($(".stage").html()).not.toEqual('');
    });
    it("should call step periodically", function() {
      jasmine.Clock.useMock();
      spyOn(squareDancer, "step");
      squareDancer.dance();

      expect(squareDancer.step.callCount).toBe(0);

      jasmine.Clock.tick(squareDancer.frequency + 10);
      expect(squareDancer.step.callCount).toBe(1);

      jasmine.Clock.tick(squareDancer.frequency + 10);
      expect(squareDancer.step.callCount).toBe(2);
    });
  });


  afterEach(function(){
    $('.stage').remove();
  });

});