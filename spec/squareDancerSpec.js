describe("squareDancers", function () {
  var squareDancer;

  beforeEach(function () {
    squareDancer = makeSquareDancer(15, 35);
  });

  it("should have a left and top coordinate", function(){
    expect(squareDancer.top).toBe(15);
    expect(squareDancer.left).toBe(35);
  });

  it("should have a frequency", function(){
    expect(squareDancer.frequency).toEqual(jasmine.any(Number));
    expect(squareDancer.frequency).toBeGreaterThan(0);
  });

});