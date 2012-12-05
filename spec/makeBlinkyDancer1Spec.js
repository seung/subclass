describe("Buttshaking Dancer", function() {
  var dancerTest;

  beforeEach(function() {
    dancerTest = makeButtShakingDancer(20, 10);
  });

  it("should have a left and top coordinate", function(){
    expect(dancerTest.left).toBe(20);
    expect(dancerTest.top).toBe(10);
  });

  it("should have a jQuery node object", function(){
    expect(dancerTest.moneyMaker).toEqual(jasmine.any(jQuery));
  });

  it("should have a frequency", function(){
    expect(dancerTest.frequency).toEqual(jasmine.any(Number));
    expect(dancerTest.frequency).toBeGreaterThan(0);
  });

  it("should have a step function that shakes its moneyMaker", function() {
    spyOn(dancerTest.moneyMaker, 'toggle');
    dancerTest.step();
    expect(dancerTest.moneyMaker.toggle).toHaveBeenCalled();
  });

  it('should have a "dancing-butt" class', function() {
  	expect(dancerTest.moneyMaker.hasClass('dancing-butt')).toBeTruthy();
  });

	describe("dance", function(){

		beforeEach(function(){
		  $('<div class="stage"></div>').appendTo('body');
		});

		it("should add something to the stage", function(){
		  expect($(".stage").html()).toEqual('');
		  dancerTest.dance();
		  expect($(".stage").html()).not.toEqual('');
		});

		it("should call step periodically", function(){
		  // setup
		  jasmine.Clock.useMock(); // sets up a way to delay this test -- used below
		  spyOn(dancerTest, "step");
		  dancerTest.dance();

		  expect(dancerTest.step.callCount).toBe(0);

		  jasmine.Clock.tick(dancerTest.frequency + 10);
		  expect(dancerTest.step.callCount).toBe(1);

		  jasmine.Clock.tick(dancerTest.frequency + 10);
		  expect(dancerTest.step.callCount).toBe(2);
		});

		afterEach(function(){
		  $('.stage').remove();
		});
	});
});

describe("SnowMan Dancer", function() {
  var dancerTest;

  beforeEach(function() {
    dancerTest = makeSnowManDancer(20, 10);
  });

  it("should have a left and top coordinate", function(){
    expect(dancerTest.left).toBe(20);
    expect(dancerTest.top).toBe(10);
  });

  it("should have a jQuery node object", function(){
    expect(dancerTest.moneyMaker).toEqual(jasmine.any(jQuery));
  });

  it("should have a frequency", function(){
    expect(dancerTest.frequency).toEqual(jasmine.any(Number));
    expect(dancerTest.frequency).toBeGreaterThan(0);
  });

  it("should have a step function that shakes its moneyMaker", function() {
    spyOn(dancerTest.moneyMaker, 'toggle');
    dancerTest.step();
    expect(dancerTest.moneyMaker.toggle).toHaveBeenCalled();
  });

  it('should have a "snow-man" class', function() {
  	expect(dancerTest.moneyMaker.hasClass('snow-man')).toBeTruthy();
  });

	describe("dance", function(){

		beforeEach(function(){
		  $('<div class="stage"></div>').appendTo('body');
		});

		it("should add something to the stage", function(){
		  expect($(".stage").html()).toEqual('');
		  dancerTest.dance();
		  expect($(".stage").html()).not.toEqual('');
		});

		it("should call step periodically", function(){
		  // setup
		  jasmine.Clock.useMock(); // sets up a way to delay this test -- used below
		  spyOn(dancerTest, "step");
		  dancerTest.dance();

		  expect(dancerTest.step.callCount).toBe(0);

		  jasmine.Clock.tick(dancerTest.frequency + 10);
		  expect(dancerTest.step.callCount).toBe(1);

		  jasmine.Clock.tick(dancerTest.frequency + 10);
		  expect(dancerTest.step.callCount).toBe(2);
		});

		afterEach(function(){
		  $('.stage').remove();
		});
	});
});

describe("Outfit changer mixin", function() {
	var dancerTest;

  beforeEach(function() {
    dancerTest = makeSnowManDancer(20, 10);
  });

  it('should change the color of a random dancer', function() {
  	var originalHue = dancerTest.moneyMaker.css('border-color');
  	changeDancerColor(dancerTest);
  	var newHue = dancerTest.moneyMaker.css('border-color');
  	expect(originalHue).toNotBe(newHue);
  });

});

describe("Lightbox", function() {
	it('should show the hidden instructions', function() {
		$('#instructions').click();
		expect($('.instructions').attr('hidden')).toBeFalsy();
	});
});