describe("goldenDancer", function() {
  var goldenDancer;

  beforeEach(function() {
    goldenDancer = makeGoldenDancer(20, 10);
  });

  it("should call fadeToggle", function() {
    spyOn(goldenDancer.moneyMaker, 'fadeToggle');
    goldenDancer.blink();   
    expect(goldenDancer.moneyMaker.fadeToggle).toHaveBeenCalled();
  });

  it("should set the frequency property to 1000" function() {
    spyOn(goldenDancer, ''
  });

});
