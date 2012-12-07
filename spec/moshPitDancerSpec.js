describe("moshPitDancer", function() {
	var moshPitDancer;

	beforeEach(function() {
		moshPitDancer = makeMoshPitDancer(20,10);
	});

	it("should have a method randomPos that returns a value less than the max plus maxChange", function(){
		expect(moshPitDancer.randomPos).toEqual(jasmine.any(Function));

		var testArray = [[20,20,20],[40,100,500],[2012,3000,666]];

		testArray.forEach(function(obj) {
			expect(moshPitDancer.randomPos(obj[0], obj[1], obj[2])).toBeLessThan(obj[1] + obj[2]);
		});
	});
});