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
      if(dancers[0]){
        var numdancers= dancers.length-1;

        while (Math.abs(w-dancers[numdancers].left) > 50 ){
          var w = Math.random() * danceFloor.width;
        }
        while (Math.abs(h-dancers[numdancers].top) > 50 ){
          var h = Math.random() * danceFloor.height;
        }

      }
      d = dancerMaker(w, h);
      //makeADancerAColorDancer(d);
      d.dance();
      dancers.push(d);
      bindListeners();
      console.log(bindListeners);
    }
  }
  console.log(danceFloor);

  return danceFloor;
}

