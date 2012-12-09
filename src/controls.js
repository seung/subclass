var setupControls = function(canvas){
  $(".clickable").on("click", function(event){
    var spriteToMake = $(this).data("sprite-button");
    canvas.makeDancer(spriteToMake);
  });
}