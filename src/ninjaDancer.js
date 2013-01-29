var ninjaStep = function(){
  this.getInPosition();
  this.move();
  this.slay();
}

var NinjaDancer = function(left, top){
  Dancer.call(this, left, top);
  this.step = ninjaStep;
  //this.frequency = 10;
  this.getInPosition = this.ninjaChop;
  this.x_speed = Math.floor(Math.random() * 7) - 3; // -3 to +3
  this.y_speed = Math.floor(Math.random() * 7) - 3; // -3 to +3
  this.frequency = Math.random() * 100;
};

NinjaDancer.prototype = Object.create(Dancer.prototype);
NinjaDancer.prototype.ninjaChop = function() {
  var sizeStr = this.size+"px ";
  var borderStr = this.border + "px";
  var styleObj = {
    "border-width": borderStr,
    // "border-radius": "10px",
    "border-color": "red",
    "background-image": "url('img/littleNinja.jpeg')",
    "background-size": "125px 125px",
    position: "absolute",
    overflow: "none",
    height: sizeStr,
    width: sizeStr,
    top: this.top,
    //transform: scaleStr,
    left: this.left
  };
  this.$moneyMaker.css(styleObj);
}
NinjaDancer.prototype.x_speed = 1;
NinjaDancer.prototype.y_speed = 1;
NinjaDancer.prototype.size = 125;
NinjaDancer.prototype.border = 5;
NinjaDancer.prototype.width = function() {
  return this.size + this.border * 2; //calculated from box model add real func later
}
NinjaDancer.prototype.height = function() {
  return this.size + this.border * 2; //calculated from box model add real func later
}
NinjaDancer.prototype.move = function(){

  if ((this.top + this.y_speed + this.height() ) >= $('body').height() ) {
    this.y_speed = Math.abs(this.y_speed) * -1;
  }

  if ((this.left + this.x_speed + this.width() ) >= $('body').width()) {
    this.x_speed = Math.abs(this.x_speed) * -1;
  }

  if ((this.top + this.y_speed ) <= 0) {
    this.y_speed = Math.abs(this.y_speed);
  }

  if ((this.left + this.x_speed ) <= 0) {
    this.x_speed = Math.abs(this.x_speed);
  }
  this.top += this.y_speed;
  this.left += this.x_speed;
}
NinjaDancer.prototype.slay = function() {
  var enemyRadius = 10;
  var list = window.dancers;
  for (var i = 0; i < list.length; i++) {
    if ((Math.abs(list[i].top - this.top) < this.size+enemyRadius) && 
        (Math.abs(list[i].left - this.left) < this.size+enemyRadius) &&
        (list[i] !== this)) 
    {
        list[i].perish();
        console.log("Dancer#"+i+" has been slain by a ninja!");
        
    }
  }
}