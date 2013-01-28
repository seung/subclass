describe("flameDancers", function () {
  var flameDancer;

  beforeEach(function () {
    flameDancer = makeFlameDancer(25, 50);
  });

  it("should have a top and left coordinate", function(){
    expect(flameDancer.top).toBe(25);
    expect(flameDancer.left).toBe(50);
  });

  it("should have a frequency", function(){
    expect(flameDancer.frequency).toEqual(jasmine.any(Number));
    expect(flameDancer.frequency).toBeGreaterThan(0);
  });

});