function setup() {
  let canvas = createCanvas(400, 400);
  // Put the canvas inside the 'sketch-holder' div
  canvas.parent("sketch-holder");
}

function draw() {
  background(220);
  fill(0);
  ellipse(mouseX, mouseY, 20, 20);
  text("Move your mouse!", 10, 20);
}
