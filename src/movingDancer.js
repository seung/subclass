var MovingDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function(stopped) {
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    var vSpeed = (Math.random()-0.5) * 20;
    var hSpeed = (Math.random()-0.5) * 20;
    if(!stopped) {
      this.setPosition(this.top + vSpeed, this.left + hSpeed);
    }
};

MovingDancer.prototype.setPosition = function(top, left) {
  this.top = top;
  this.left = left;
  var styleSettings = {
    'height': '56px',
    'width': '100px',
    'background': 'url("http://awesomelyluvvie.com/wp-content/uploads/2012/10/DontGiveAFuckStarWars.gif") no-repeat',
    'background-size': '100%',
    'border': '0px',
    'border-radius': '0px',
    opacity: 1.0,
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


// TurningDancer.prototype.setPosition = function(top, left) {
//     this.angle = ((this.angle + 10) % 360);
//     var styleSettings = {
//     'height': '62px',
//     'width': '98px',
//     'background': 'url("http://wemakeawesomesh.it/nyancat/nyan.gif") no-repeat',
//     'background-size': '100%',
//     'border': '0px',
//     'border-radius': '0px',
//     'transform':'rotate(' + this.angle + 'deg)',
//     top: top,
//     left: left};
//   this.$node.css(styleSettings);
// };

// https://twimg0-a.akamaihd.net/profile_images/1298033298/At_Apple.jpg

// https://twimg0-a.akamaihd.net/profile_images/824696226/eun.jpg