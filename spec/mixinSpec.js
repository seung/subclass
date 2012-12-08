
describe("Outfit changer mixin", function() {
	var dancerTest;

  beforeEach(function() {
    dancerTest = new SnowManDancer(20, 10);
  });

  it('should change the color of a random dancer', function() {
  	var originalHue = dancerTest.moneyMaker.css('border-color');
  	changeDancerColor(dancerTest);
  	var newHue = dancerTest.moneyMaker.css('border-color');
  	expect(originalHue).toNotBe(newHue);
  });
});