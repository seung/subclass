
var makeDanceFloor = function(kindsOfDancers, dancers){

  var danceFloor = {
    width: $(".stage").width(),
    height: $('body').height(),

    makeDancer: function(dancerMaker){
      // get the kind of dancer we're supposed to make

      // make a dancer with a random position
      var w = Math.random() * danceFloor.width;
      var h = -500
      var d = dancerMaker(w, h);
      
      d.dance();
      dancers.push(d);
    }
  }

  return danceFloor;
}