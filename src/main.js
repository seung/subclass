$(document).ready(function(){

  var kindsOfDancers = {
    BeachBall_Dancer: function (w, h) {
      var o = makeBlinkyDancer(w, h);
      o.moneyMaker.html("<img src='pinwheel.png' height=75px width=75px>");
      o.moneyMaker.css("border", "none");
      return o;
    }, // found in blinkyDancer.js
    Grinchy_Dancer: function (w, h) {
      var o = makeBlinkyDancer(w, h);
      o.moneyMaker.html("<img src='grinchface.png' height=200px width=160px>");
      o.moneyMaker.css("border", "none");
      return o;
    },
    Tiny_Dancer: function (w, h) {
      var o = makeBlinkyDancer(w, h);
      o.moneyMaker.css("transition","border-width 10s linear ");
      o.moneyMaker.css("border-width","5px")
      o.moneyMaker.css("border-color", randomColor());
      return o;
    },
    Cat_Dancer: function (w, h) {
      var o = makeBlinkyDancer(w, h);
      o.moneyMaker.html("<img src='catman.png' width=75px, height=100px>");
      o.moneyMaker.css("border", "none");
      return o;
    }
  };


  //creep in and out functions for growing mixin
  function creepIn(i, oldAttrValue) { return '' +  parseInt(oldAttrValue) * 10 + 'px' } 
  function creepOut(i, oldAttrValue) { return '' +  parseInt(oldAttrValue) / 10 + 'px' }


  //create the mixins
  var danceMixins = {
    grow: function (node) { 
      node = node.children().attr({'height': creepIn, width:creepIn});
      setTimeout(function () {node.attr({'height': creepOut, width:creepOut }) }, 4000);
      },
    spin: function (node) { node.addClass("spin")} ,
    death: function (node) { node.remove() } ,
    ghostyness: function (node) { node.addClass("ghost") }
  }

  //set the default mouseover mixin
  window.currentMagic = danceMixins.spin;
 
  //function to create random colors
  var hex = '0123456789ABCDEF'.split('');

  function rand(n) { 
    return ~~ (Math.random() * n)};

  function randomColor() { 
    return '#' + [1,2,3].map(function () 
      { return hex[rand(16)] }).join('') };

  setInterval(function () { 
    $('.stage').css('background-color', randomColor()) }, 100);


  //set up the dancers and floor
  window.dancers = [];

  var danceFloor = makeDanceFloor(kindsOfDancers, dancers);


  //put the menus on the page

  Object.keys(danceMixins).forEach(function (mixin) {
   $("<li>" + mixin + "</li>").appendTo('ul').on('click', function () {
      $('li').removeAttr('id')
      $(this).attr('id','selected')
      window.currentMagic = danceMixins[mixin]
   })
  });

  Object.keys(kindsOfDancers).forEach(function (dancer ) {

    var link = $('<a href="#"></a>');

    link.text('make a ' + dancer.replace('_', ' '));

    link.appendTo('.topbar')

    link.on('click', function () { 
      for (var i = 0;  ++i < Math.random() * 5 + 3;) {
      danceFloor.makeDancer(kindsOfDancers[dancer])
      }
    });

    $('ul').css('left', window.innerWidth - 125);

  });


})  


