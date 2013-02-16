var makeDanceFloor = function(kindsOfDancers, dancers){

  var danceFloor = {
    width: $("body").width(),
    height: $("body").height(),

    addDancer: function(dancerMakerName){
      var dancerMaker = kindsOfDancers[dancerMakerName];

      var w = Math.random() * danceFloor.width;
      var h = Math.random() * danceFloor.height;
      var d = dancerMaker(w, h);

      d.startDancing();
      window.dancers.push(d);
    }
  }

  return danceFloor;
}