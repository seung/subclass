describe("transformDancer", function(){
  var transformDancer;

  beforeEach(function() {
    transformDancer = new TransformDancer(20,20);
  });

  it("The Blink Method should modify the css value to have a transform value of scale:(X,X)", function () {
  	expect(transformDancer.moneyMaker.css('transform')).toBeFalsy();
    transformDancer.blink();
    expect(transformDancer.moneyMaker.css('transform')).toBeTruthy();
  });

  it("The Scale values should be different each time .blink is called", function(){
  	transformDancer.blink();
  	//debugger;
  	originalValue = transformDancer.moneyMaker.css('transform');
  	transformDancer.blink();
  	nextValue = transformDancer.moneyMaker.css('transform');
  	expect(originalValue).not.toEqual(nextValue);

  });


});