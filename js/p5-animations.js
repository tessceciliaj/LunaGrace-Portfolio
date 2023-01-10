
function setup() {
  let cnv = createCanvas(190, 190);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position( x, y);
}

function draw() {
  stroke(93, 0, 233);
  c = color('rgba(93, 0, 223, 0.03)');
  fill(c);
  background('#0d0c0f')
  rectMode(CENTER);
  translate(width / 2, height / 2);
  rotate(frameCount * 0.01);
  square(0, 0, 200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
