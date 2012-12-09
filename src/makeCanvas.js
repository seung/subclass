var makeCanvas = function(kindsOfDancers, dancers){

  var canvas = {
    width: $("body").width(),
    height: $("body").height(),

    makeDancer: function(dancerMakerName){
      // get the kind of dancer we're supposed to make
      var dancerMaker = kindsOfDancers[dancerMakerName];

      // make a dancer with a random posi
      var w = Math.random() * canvas.width;
      var h = Math.random() * canvas.height;
      var d = new dancerMaker(w, h);
      
      d.dance();
      dancers.push(d);
    }
  }

  return canvas;
}