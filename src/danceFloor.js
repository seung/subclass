var makeDanceFloor = function(kindsOfDancers, dancers){

  var danceFloor = {
    width: $("body").width(),
    height: $("body").height(),

    makeDancer: function(dancerMakerName){
      // get the kind of dancer we're supposed to make
      var dancerMaker = kindsOfDancers[dancerMakerName];

      // make a dancer with a random position
      var w = Math.random() * danceFloor.width;
      var h = Math.random() * danceFloor.height;
      d = dancerMaker(w, h);
      //makeADancerAColorDancer(d);
      d.dance();
      dancers.push(d);
      bindListeners();

    }
  }

  return danceFloor;
}