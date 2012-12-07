describe("Buttshaking Dancer", function() {
  var dancerTest;

  beforeEach(function() {
    dancerTest = makeButtShakingDancer(20, 10);
  });

  it('should have a "dancing-butt" class', function() {
  	expect(dancerTest.moneyMaker.hasClass('dancing-butt')).toBeTruthy();
  });
});

describe("SnowMan Dancer", function() {
  var dancerTest;

  beforeEach(function() {
    dancerTest = makeSnowManDancer(20, 10);
  });

  it('should have a "snow-man" class', function() {
  	expect(dancerTest.moneyMaker.hasClass('snow-man')).toBeTruthy();
  });
});
