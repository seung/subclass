describe("dancer", function() {
  var dancer;

  beforeEach(function() {
    dancer = new Dancer(20, 10);
  });

  it("should have a left and top coordinate", function(){
    expect(dancer.left).toBe(20);
    expect(dancer.top).toBe(10);
  });

  it("should have a jQuery node object", function(){
    expect(dancer.moneyMaker).toEqual(jasmine.any(jQuery));
  });

  it("should have a step function that shakes its moneyMaker", function() {
    spyOn(dancer.moneyMaker, 'toggle');
    dancer.step();
  });

  describe("dance", function(){
    beforeEach(function(){
      $('<div class="stage"></div>').appendTo('body');
    });

    it("should add something to the stage", function(){
      expect($(".stage").html()).toEqual('');
      dancer.dance();
      expect($(".stage").html()).not.toEqual('');
    });

    afterEach(function(){
      $('.stage').remove();
    });
  });
});
