describe("flameDancers", function () {
  var flameDancer;

  beforeEach(function () {
    flameDancer = makeFlameDancer(15, 35);
  });

  it("should have a left and top coordinate", function(){
    expect(flameDancer.left).toBe(15);
    expect(flameDancer.top).toBe(35);
  });

  it("should have a frequency", function(){
    expect(flameDancer.frequency).toEqual(jasmine.any(Number));
    expect(flameDancer.frequency).toBeGreaterThan(0);
  });

});