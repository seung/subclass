$(document).ready(function(){

  // This is a list of the different kinds of dancers. Right now, 
  // there's just one, but eventually, you'll want to add more.
  var kindsOfDancers = {
    makeBlinkyDancer: makeBlinkyDancer, // found in blinkyDancer.js
    makeButtShakingDancer: makeButtShakingDancer,
    makeSnowManDancer: makeSnowManDancer
  };
  
  // This is a list of all the dancers that have been created.
  // * danceFloor.js will add to it when you click on stuff.
  // * When you're writing mixins that affect existing dancers, you'll use it.
  window.dancers = [];

  var danceFloor = makeDanceFloor(kindsOfDancers, dancers);
  setupControls(danceFloor);
  
  //show instructions in centered lightbox
  $('#instructions').click(function(e) {
    $('.instructions').lightbox_me({
        centered: true,
        hidden: false
        });
    e.preventDefault();
  });

  //button to change a random dancer's color
  $('.outfit').on('click', function() {
    //grab random index of dancer array
    var randDancer = Math.floor(Math.random() * (window.dancers.length - 1));
    //store the random dancer to change its color
    var someDancer = window.dancers[randDancer]
    changeDancerColor(someDancer);


  });

});


