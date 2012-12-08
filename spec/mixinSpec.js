describe("picDancer", function() {
  var fakePicDancer;
  var picChanger;

  beforeEach(function() {
    fakePicDancer = new BlinkyDancer(10,20);
    picChanger = makePicture(window.dancers);
  });

  it("should call randomClassGenerator once", function(){
  // setup
  window.dancers.length = jasmine.createSpy();
  window.dancers.length = 5;
  picChanger.randomClassGenerator = jasmine.createSpy();

  expect(picChanger.randomClassGenerator.callCount).toBe(1);

  // picDancer.dance();

  // expect(picDancer.step.callCount).toBe(0);

  // jasmine.Clock.tick(picDancer.frequency + 10);
  // expect(picDancer.step.callCount).toBe(1);

  // jasmine.Clock.tick(picDancer.frequency + 10);
  // expect(picDancer.step.callCount).toBe(2);
  });

  // afterEach(function(){
  //   $('.stage').remove();
  // });
});
