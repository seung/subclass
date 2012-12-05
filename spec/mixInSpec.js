describe("Mix In", function() {

	it("should remove the method 'danceMove' from the dancer method 'step'", function() {
		spyOn(dancer, "danceMove");
		mixin();
		dancer.step();
		expect(dancer.danceMove).toNotHaveBeenCalled();

	});

});