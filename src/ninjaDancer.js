var ninjaStep = function(){
  this.getInPosition();
  this.move();
}

var NinjaDancer = function(left, top){
  Dancer.call(this, left, top);
  this.step = ninjaStep;
  this.frequency = 10;
  this.getInPosition = this.ninjaChop;
};

NinjaDancer.prototype = Object.create(Dancer.prototype);
NinjaDancer.prototype.ninjaChop = function() {
  var scaleStr = "scale("+this.scale+")";
  var styleObj = {
    "border-width": "5px",
    // "border-radius": "10px",
    "border-color": "red",
    "background-image": "url('img/littleNinja.jpeg')",
    // width: "512px",
    position: "absolute",
    height: "225px",
    width: "225px",
    top: this.top,
    //transform: scaleStr
    left: this.left
  };
  this.$moneyMaker.css(styleObj);
}
NinjaDancer.prototype.x_speed = 1;
NinjaDancer.prototype.y_speed = 1;
NinjaDancer.prototype.scale = 0.4;
NinjaDancer.prototype.width = function() {
  return 235; //calculated from box model add real func later
}
NinjaDancer.prototype.height = function() {
  return 235; //calculated from box model add real func later
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

  if ((this.left + this.x_speed - this.width() ) <= 0) {
    this.x_speed = Math.abs(this.x_speed);
  }
  this.top += this.y_speed;
  this.left += this.x_speed;

}