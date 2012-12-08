var makeDanceFloor = function(kindsOfDancers, dancers){

  var danceFloor = {
    width: $("body").width(),
    height: $("body").height(),

    makeDancer: function(dancerName){
      // get the kind of dancer we're supposed to make
      var dancer = kindsOfDancers[dancerName];

      // make a dancer with a random position
      var w = Math.random() * danceFloor.width;
      var h = Math.random() * danceFloor.height;
      var d =  new dancer(w, h);
      console.log(d)
      d.getInPosition();
      d.dance();
      dancers.push(d);
    }
  }

  return danceFloor;
}