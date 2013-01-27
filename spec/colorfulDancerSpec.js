describe("colorfulDancer", function() {
  var colorfulDancer;

  beforeEach(function() {
    colorfulDancer = makeColorfulDancer(20, 10);
  });

  it("should have a method named 'makeColorfulDancer'", function() {
    expect(colorfulDancer.dance).toEqual(jasmine.any(Function));
  });

  it("should have a left and top coordinate", function(){
    expect(colorfulDancer.left).toBe(20);
    expect(colorfulDancer.top).toBe(10);
  });

  it("should have a color property", function() {
    expect(colorfulDancer.color).not.toBe(undefined);
  });

  it("should have a step function", function() {
    expect(colorfulDancer.step).toEqual(jasmine.any(Function));
  });

  it("should have a function called shimmer", function() {
    expect(colorfulDancer.shimmer).toEqual(jasmine.any(Function));
  });

  xit("step should call a getInPosition function", function() {
    colorfulDancer.step();
    expect(colorfulDancer.getInPosition).toHaveBeenCalled();
  });

  afterEach(function(){
    $('.stage').remove();
  });
});
