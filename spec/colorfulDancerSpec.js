describe("colorfulDancer", function() {
  var colorfulDancer;

  beforeEach(function() {
    colorfulDancer = makeColorfulDancer(20, 10);
  });

  it("should have a method named 'makeColorfulDancer'", function() {
    expect(colorfulDancer.dance).toEqual(jasmine.any(Function));
  });

  xit("should have a left and top coordinate", function(){
    expect(colorfulDancer.left).toBe(20);
    expect(colorfulDancer.top).toBe(10);
  });

  afterEach(function(){
    $('.stage').remove();
  });
});
