describe("raveDancer", function() {
	var raveDancer;

	beforeEach(function() {
		raveDancer = new RaveDancer(20,10)
	});

	it("should be one of the rave colors in the array", function(){
		raveDancer.danceMove();
		expect(raveDancer.raveColors.indexOf(raveDancer.moneyMaker.css('border-color'))).not.toEqual(-1);
	});
});




