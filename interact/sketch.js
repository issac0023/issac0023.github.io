var x = 60;   //x coordinate
var y = 440;   // y coordinate
var radius = 45;   // Head radius
var bodyHeight = 180;   // Body height
var neckHeight = 40;   // Neck height

var easing = 0.04;

function setup() {
  createCanvas(360,480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  
  var neckY = -1 * (bodyHeight + neckHeight + radius); 
  
  background(50, 55, 100);
  
  translate(mouseX, y);   //Move all to (mouseX, y)
  
  if(mouseIsPressed) {
    scale(1.0);
  } else {
    scale(0.6);  // 60% size when mouse is presses
  }
  
  // Body
  noStroke();
  fill(102);
  ellipse(0, -33, 33, 33)
  fill(0);
  rect(-45, -bodyHeight, 90, bodyHeight-33);
  
  //Neck
  stroke(102);
  line(12, -bodyHeight, 12, neckY);
  
  // Hair
  push();
  translate(12, neckY);
  var angle = -PI/30.0;
  for (var i = 0; i<=30; i++) {
    line(80, 0, 0, 0);
    rotate(angle);
  }
  pop();
  
  // Head
  noStroke();
  fill(0);
  ellipse(12, neckY, radius, radius);
  fill(255);
  ellipse(24, neckY-6, 14, 14);
  fill(0);
  ellipse(24, neckY-6, 3, 3);
  
}
