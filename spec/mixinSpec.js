describe("Mixins", function(){
	var colorDancer;
	window.dancers = [];
	var mixinController;

	beforeEach(function(){
		colorDancer = makeColorDancer(20,20);
		colorDancer2 = makeColorDancer(20,20);
		colorDancer3 = makeColorDancer(20,20);
		window.dancers = [colorDancer, colorDancer2, colorDancer3];
		mixinController = makeMixinController();
	});
	describe("selectRandomDancer", function(){
	  it("should return a random dancer", function(){
      expect(mixinController.selectRandomDancer()).toBeTruthy();
	  });


	  it("should determine that a Dancer has been returned", function() {
        var testDancer = mixinController.selectRandomDancer();
        expect(testDancer.blink).toEqual(jasmine.any(Function));
      });
    });

	describe("addZRotation", function(){
		it("should add transfrom to Dancer", function() {
			//debugger;
			window.dancers.forEach(function (theDancer){
				expect(theDancer.moneyMaker.css('transform')).toBeFalsy();
			});

			for(var i = 0; i < 30; i ++){
			  mixinController.addZRotation();
			}
			window.dancers.forEach(function (theDancer){
				theDancer.blink();
				expect(theDancer.moneyMaker.css('transform')).toBeTruthy();
			});
		});
	});
});