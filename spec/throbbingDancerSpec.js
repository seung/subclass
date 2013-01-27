describe("throbbing dancer", function() {
  var throbbingDancer;

  beforeEach(function() {
    throbbingDancer = makeThrobbingDancer(20, 10);
  });

  it("should have a method named 'makeThrobbingDancer'", function() {
    expect(throbbingDancer.dance).toEqual(jasmine.any(Function));
  });

  it("should have a left and top coordinate", function(){
    expect(throbbingDancer.left).toBe(20);
    expect(throbbingDancer.top).toBe(10);
  });

  it("should have a step function", function() {
    expect(throbbingDancer.step).toEqual(jasmine.any(Function));
  });

 it("should have a function called throb", function(){
    expect(throbbingDancer.throb).toEqual(jasmine.any(Function));
  });

  it("step should call a getInPosition function", function() {
    spyOn(throbbingDancer, 'getInPosition');
    throbbingDancer.step(); 
    expect(throbbingDancer.getInPosition).toHaveBeenCalled();
  });



  afterEach(function(){
    $('.stage').remove();
  });
});
