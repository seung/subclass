$(document).ready(function(){

  //creep in and out functions for growing mixin
  function creepIn(i, oldAttrValue) { return '' +  parseInt(oldAttrValue) * 10 + 'px' } 
  function creepOut(i, oldAttrValue) { return '' +  parseInt(oldAttrValue) / 10 + 'px' }


  //create the mixins
  var danceMixins = {
    grow: function (node) { 
      node = node.children().attr({
        'height': creepIn,
        'width':creepIn
      });
      setTimeout(function () {node.attr({'height': creepOut, width:creepOut }) }, 4000);
    },
    spin: function (node) { node.addClass("spin")} ,
    death: function (node) { node.remove() } ,
    ghostyness: function (node) { node.addClass("ghost") }
  }

  //set the default mouseover mixin
  window.currentMagic = danceMixins.spin;
 
  var randomColor = function () { 
    var randomNumber = ~~ (Math.random() * 16);
    return '#' + new Array(6).map(function (){
      return '0123456789ABCDEF'[randomNumber];
    }).join('');
  };

  setInterval(function () { 
    $('.stage').css('background-color', randomColor());
  }, 100);




//todo: there is no 'kindsofdancers' object anymore
  var danceFloor = makeDanceFloor();


  //put the menus on the page

  Object.keys(danceMixins).forEach(function (mixin) {
   $("<li>" + mixin + "</li>").appendTo('ul').on('click', function () {
      $('li').removeAttr('id')
      $(this).attr('id','selected');
      window.currentMagic = danceMixins[mixin];
   })
  });

  for(var i in dancerClasses){
      function (value) {
        var description = value[i][0];
        var Constructor = value[i][1];
        var link = $('<a href="#">make a ' + description + '</a>').appendTo('.topbar');
        
        link.on('click', function () { 
          for (var i = 0; i < Math.random() * 5 + 3; i++) {
            danceFloor.makeDancer(Constructor);
          }
        });
      };
  }

  $('ul').css('left', window.innerWidth - 125);
});
