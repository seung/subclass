describe("goldenDancer", function() {
  var goldenDancer;

  beforeEach(function() {
    goldenDancer = makeGoldenDancer(20, 10);
  });

  it("should call fadeToggle", function() {
    spyOn(goldenDancer.moneyMaker, 'fadeToggle');
    goldenDancer.blink();   
    expect(goldenDancer.moneyMaker.fadeToggle).toHaveBeenCalled();
  });

  it("should set frequency to 1000 milliseconds", function() {
    expect(goldenDancer.frequency).toBe(1000);
  });

  describe("addClass", function(){
    beforeEach(function(){
      $('<div class="stage"></div>').appendTo('body');
    });

    it("should add something to the stage", function(){
      expect($(".stage").html()).toEqual('');
      goldenDancer.dance();
      expect($(".stage").html()).not.toEqual('');
    });

    it("should be called", function() {
      spyOn(goldenDancer.moneyMaker, "addClass");
      goldenDancer.moneyMaker.addClass();
      expect(goldenDancer.moneyMaker.addClass).toHaveBeenCalled();
    });

    it("should create a moonwalk class", function() {

    });

    afterEach(function(){
      $('.stage').remove();
    });
  });
});


