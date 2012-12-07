describe("greendancer", function() {
  var blinkyDancer;

  beforeEach(function() {
    blinkyDancer = makeBlinkyDancer (20, 10);
    greenDancer(blinkyDancer);
  });

  it("should modify dancer.frequency to wait 10 seconds", function() {
  	expect(blinkyDancer.frequency).toBe(10000);
  });
});
