describe("danceFloor", function() {
  var danceFloor;
  var dancers; // object that the dance floor modifies
  var fakeDancerContainer;
  var danceSpy;

  beforeEach(function() {
    // make a spy constructor 
    danceSpy = jasmine.createSpy();
    fakeDancerContainer = {
      FakeDancer: function(){
        this.dance = danceSpy;
      }
    };
    spyOn(fakeDancerContainer, 'FakeDancer').andCallThrough();

    // Set up the arguments that makeDanceFloor requires.
    var kindsOfDancers = {
      fakeDancer: fakeDancerContainer.FakeDancer
    };
    dancers = [];

    danceFloor = makeDanceFloor(kindsOfDancers, dancers);

  });

  it("should have width and height properties", function(){
    expect(danceFloor.width).toBeGreaterThan(0);
    expect(danceFloor.height).toBeGreaterThan(0);
  });

  describe("makeDancer", function(){

    it("should make a dancer of the specified type", function(){
      danceFloor.makeDancer("fakeDancer");
      expect(fakeDancerContainer.FakeDancer).toHaveBeenCalled();
    });

    it("should call 'dance' on the created dancer", function(){
      danceFloor.makeDancer("fakeDancer");
      expect(danceSpy).toHaveBeenCalled();
    });

  });

});
