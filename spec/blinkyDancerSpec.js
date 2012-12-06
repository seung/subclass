describe("blinkyDancer", function() {
  var blinkyDancer;


  describe ("blinkyDancer", function() {
    beforeEach(function() {
      blinkyDancer = makeBlinkyDancer(20, 10);
    });

    it("should have a left and top coordinate", function(){
      expect(blinkyDancer.left).toBe(20);
      expect(blinkyDancer.top).toBe(10);
    });

    it("should have a jQuery node object", function(){
      expect(blinkyDancer.moneyMaker).toEqual(jasmine.any(jQuery));
    });

    it("should have a frequency", function(){
      expect(blinkyDancer.frequency).toEqual(jasmine.any(Number));
      expect(blinkyDancer.frequency).toBeGreaterThan(0);
    });

    it("should have a step function that shakes its moneyMaker", function() {
      spyOn(blinkyDancer.moneyMaker, 'toggle');
      blinkyDancer.step();
      expect(blinkyDancer.moneyMaker.toggle).toHaveBeenCalled();
    });
  });

  describe ("other dancers", function() {

    describe("pole dancer", function () {
      it("should change blinkyDancer's height", function() {
        var poleDancer = makePoleDancer(20, 10);
        expect(poleDancer.height).toBeDefined();
      });

      it("should insert the new property into the DOM", function() {
        var poleDancer = makePoleDancer(20, 10);
        expect(poleDancer.moneyMaker.css("height")).toBeTruthy();
      })
    });

    describe("colored dancer", function() {

      it("colored dancer should change blinkyDancer's color to a random color", function() {
        var coloredDancer = makeColoredDancer(20, 10);
        testStr = coloredDancer.moneyMaker.css("border-color").slice(0,3);
        expect(testStr).toEqual("rgb");
      });
    });

  });

  describe("dance", function(){
    beforeEach(function(){
      $('<div class="stage"></div>').appendTo('body');
    });

    it("should add something to the stage", function(){
      expect($(".stage").html()).toEqual('');
      blinkyDancer.dance();
      expect($(".stage").html()).not.toEqual('');
    });

    it("should call step periodically", function(){
      // setup
      jasmine.Clock.useMock(); // sets up a way to delay this test -- used below
      spyOn(blinkyDancer, "step");
      blinkyDancer.dance();

      expect(blinkyDancer.step.callCount).toBe(0);

      jasmine.Clock.tick(blinkyDancer.frequency + 10);
      expect(blinkyDancer.step.callCount).toBe(1);

      jasmine.Clock.tick(blinkyDancer.frequency + 10);
      expect(blinkyDancer.step.callCount).toBe(2);
    });

    afterEach(function(){
      $('.stage').remove();
    });
  });

  describe("mixin", function() {
    it("should add class 'border-square' to the dancer", function() {
      var blinkyDancer = makeBlinkyDancer(10, 10);
      mixinSquare(blinkyDancer);
      expect(blinkyDancer.moneyMaker.hasClass("border-square")).toBeTruthy();
    });
  });

  describe("emergent behavior", function() {
    describe("Should dancer move", function() {
      it("older dancer will move if newer dancer is within defined distance of it", function() {
        var dancer1 = makeBlinkyDancer(10, 10);
        var dancer2 = makeBlinkyDancer(10, 20);
        window.dancers = [dancer1, dancer2];
        shouldDancerMove();
        expect(window.dancers[0].moneyMaker.css("top")).not.toEqual(10);
      });
    });
  });
});
